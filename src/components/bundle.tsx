import { useEffect, useState } from "react";
import  ethIcon  from '../assets/ethIcon.png'
import getCollectionFloor, { Token } from "./getListings";
import { useConnect, useSigner, useNetwork, useAccount } from "wagmi";
import { WalletConnector } from "./utils/walletConnector";
import {
  Execute,
  getClient,
  ReservoirClientActions,
} from "@reservoir0x/reservoir-kit-client";

async function sweepTokens(
  sweepTotal: number,
  tokens: Parameters<ReservoirClientActions["buyToken"]>["0"]["tokens"],
  progressCallback: (message: string) => void,
  signer?: ReturnType<typeof useSigner>["data"]
) {
  // Required parameters to complete the transaction
  if (!signer) {
    throw new ReferenceError("Missing a signer");
  }

  try {
    // Then we supply these parameters to the buyToken
    // There are a couple of key parameters which we'll dive into
    getClient()
      ?.actions.buyToken({
        tokens: tokens,
        signer: signer,
        // The expectedPrice is used to protect against price mismatch issues when prices are rapidly changing
        // The expectedPrice can be omitted but the best practice is to supply this
        expectedPrice: sweepTotal,
        // The onProgress callback function is used to update the caller of the buyToken method
        // It passes in a set of steps that the SDK is following to process the transaction
        // It's useful for determining what step we're currently on and displaying a message to the user
        onProgress: (steps: Execute["steps"]) => {
          if (!steps) {
            return;
          }
          const currentStep = steps.find((step) =>
            step.items?.find((item) => item.status === "incomplete")
          );
          if (currentStep) {
            const progress = currentStep.items?.findIndex(
              (item) => item.status === "incomplete"
            );
            progressCallback(
              currentStep.action
                ? `${currentStep.action} (${(progress || 0) + 1}/${
                    currentStep.items?.length
                  })`
                : ""
            );
          }
        },
      })
      .then(() => {
        progressCallback("Success");
      })
      .catch((error) => {
        progressCallback(`Error: ${error.response.data.message}`);
      });

    return true;
  } catch (err) {
    console.error(err);
    throw err;
  }
}



export default function Bundle() {
    
  const { data: signer } = useSigner();
  const { isConnected } = useAccount();
  const { connectors } = useConnect();
  const connector = connectors[0];
  const { chain } = useNetwork();
  const [citizenTokens, setCitizenTokens] = useState<Token[]>([]);
  const [landTokens, setLandTokens] = useState<Token[]>([]);
  const [weaponTokens, setWeaponTokens] = useState<Token[]>([]);
  const [selectedTokens, setSelectedTokens] = useState<Token[]>([]);
  const [selectedTokenIds, setSelectedTokenIds] = useState<string[]>([]);
  const [sweepTotal, setSweepTotal] = useState(0);
  const [progressText, setProgressText] = useState("");

  const citizenAddress = "0x63d85ec7B1561818Ec03E158ec125a4113038A00"
  const landAddress = "0x17d084106c2f1c716ce39fa015ab022757d30c9a"
  const weaponAddress = "0x1522C212757e65E18832183aB8AfE7F89B8abE0A"
  

  const handleOnChange = (token: Token) => {
    const selectedTokenIds = selectedTokens.map(
      (token) => token.token?.tokenId
    );
    const selected = selectedTokenIds.includes(token.token?.tokenId);
    let updatedselectedTokens = selectedTokens.slice();

    if (selected) {
      updatedselectedTokens = selectedTokens.filter(
        (selectedToken) => selectedToken.token?.tokenId !== token.token?.tokenId
      );
    } else {
      updatedselectedTokens.push(token);
    }

    setSelectedTokens(updatedselectedTokens);
    const ids: string[] = [];
    updatedselectedTokens.forEach((token) => {
      if (token.token?.tokenId) {
        ids.push(token.token.tokenId);
      }
    });
    setSelectedTokenIds(ids);
  };

  useEffect(() => {
    getCollectionFloor(citizenAddress).then((tokens) => {
        setCitizenTokens(tokens); 
    });
    getCollectionFloor(landAddress).then((tokens) => {
        setLandTokens(tokens); 
    });
    getCollectionFloor(weaponAddress).then((tokens) => {
        setWeaponTokens(tokens); 
    });
  }, []);


  useEffect(() => {
    const newTotal = totalCalc(citizenTokens) + totalCalc(landTokens) + totalCalc(weaponTokens)
    setSweepTotal(newTotal);
  }, [selectedTokenIds]);

  const totalCalc = (tokens: Token[]) => {
    return tokens.reduce((total, token) => {
        if (
          token.token &&
          selectedTokenIds.includes(token.token?.tokenId) &&
          token.market?.floorAsk?.price?.amount?.native
        ) {
          total += token.market.floorAsk.price.amount.native;
        }
        return total;
      }, 0);
  }
  
//window sizing
  const [width, setWidth]   = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
  }
  useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
  }, []);



  const makeTable = (tokens: Token[], tokneAddress: string) => {
    const opensea = "https://opensea.io/assets/ethereum/" 
    return (      
      <table className="sweep-list">
        <thead>
            <tr>
                <th>Token Id</th>
                <th>Price</th>
                <th>Sweep</th>
            </tr>
        </thead>
        <tbody>
        {tokens.map((token, i) => (
            <tr key={i}>
              <td>
                <a href={opensea + tokneAddress + '/' + token.token?.tokenId} target='_blank'>
                
                <img width={width/8} src={token.token?.image} alt={token.token?.tokenId} />
                {' ' + token.token?.tokenId} 
                </a>
              </td>
              <td>{token.market?.floorAsk?.price?.amount?.native}</td>
              <td id='checkTable'>
              <label className="container">
                  <input
                    type="checkbox"
                    value={token.token?.tokenId}
                    checked={
                      token.token?.tokenId
                        ? selectedTokenIds.includes(token.token.tokenId)
                        : false
                    }
                    onChange={() => handleOnChange(token)}
                  />
                  <span className="checkmark"></span>
                </label>
              </td>
            </tr>
        ))}
        </tbody>
      </table>
    )
  }

  const buttonClick = async () => {
    if (!isConnected) {
      alert("Connect wallet to sweep");
      return;
    }
    if (chain?.id !== 1) {
      alert(
        "You are connected to the wrong network. Please use the Ethereum Mainnet."
      );
      return;
    }

    if (!isConnected) {
      await connector.connect();
    }
    setProgressText("");
    const tokens = selectedTokens.map((token) => {
      return {
        tokenId: token.token?.tokenId as string,
        contract: token.token?.contract as string,
      };
    });
    sweepTokens(sweepTotal, tokens, setProgressText, signer);
  }

  

  return (
    <>
      <WalletConnector />
      <div className="progress-text">
        <b>Progress:</b> {progressText}
      </div>
      <h2>
        <img width="35"src={ethIcon} alt="ETH" /> {sweepTotal} 
      </h2>
      <button
        disabled={selectedTokens.length === 0}
        onClick={() => {
          setProgressText("");
          setSelectedTokens([]);
          setSelectedTokenIds([]);
        }}
      > Clear Selections 
      </button>
      <button
        disabled={selectedTokens.length === 0}
        onClick={async()=>buttonClick()}
      > Sweep Tokens
      </button>
      <div className="tables">
        {makeTable(citizenTokens, citizenAddress)}
        {makeTable(landTokens, landAddress)}
        {makeTable(weaponTokens, weaponAddress)}
      </div>


    </>
  );
}
