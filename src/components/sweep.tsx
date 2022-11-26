import { useEffect, useState } from "react";

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

export default function Sweep() {
  const { data: signer } = useSigner();
  const { isConnected } = useAccount();
  const { connectors } = useConnect();
  const { chain } = useNetwork();
  const [tokens, setTokens] = useState<Token[]>([]);
  const [selectedTokens, setSelectedTokens] = useState<Token[]>([]);
  const [selectedTokenIds, setSelectedTokenIds] = useState<string[]>([]);
  const [sweepTotal, setSweepTotal] = useState(0);
  const [collectionId, setCollectionId] = useState("0x63d85ec7B1561818Ec03E158ec125a4113038A00");
  const [inputValue, setInputValue] = useState("0x63d85ec7B1561818Ec03E158ec125a4113038A00");
  const [progressText, setProgressText] = useState("");

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
    getCollectionFloor(collectionId).then((tokens) => {
      setTokens(tokens); 
    });
  }, [collectionId]);

  useEffect(() => {
    const newTotal = tokens.reduce((total, token) => {
      if (
        token.token &&
        selectedTokenIds.includes(token.token?.tokenId) &&
        token.market?.floorAsk?.price?.amount?.native
      ) {
        total += token.market.floorAsk.price.amount.native;
      }
      return total;
    }, 0);

    setSweepTotal(newTotal);
  }, [tokens, selectedTokenIds]);

  const connector = connectors[0];
  const opensea = "https://opensea.io/assets/ethereum/" + collectionId + '/'
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

  return (
    <>
      <WalletConnector />
      <input
        className="collection-input"
        type="text"
        value={inputValue}
        placeholder="Collection Address"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          setCollectionId(inputValue);
          setSelectedTokens([]);
          setSelectedTokenIds([]);
        }}
      >
        Get Listings
      </button>

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
                <a href={opensea + token.token?.tokenId} target='_blank'>
                
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

      {!tokens.length && (
        <div className="empty-message">
          Enter a collection address to get available tokens
        </div>
      )}

      <button
        disabled={selectedTokens.length === 0}
        onClick={async () => {
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
        }}
      >
        Sweep Tokens
      </button>

      {progressText.length > 0 && (
        <div className="progress-text">
          <b>Progress:</b> {progressText}
        </div>
      )}
    </>
  );
}
