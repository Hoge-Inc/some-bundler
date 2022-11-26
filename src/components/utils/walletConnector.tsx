import React from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

export const WalletConnector: React.FC = () => {
  const { connect, connectors, pendingConnector } = useConnect();
  const { disconnect } = useDisconnect();
  const { address, isConnecting, isConnected } = useAccount();
  const connector = connectors[0];

  return (
    <div style={{ marginBottom: 25 }}>
      {isConnected && (
        <button key={connector.id} onClick={() => disconnect()}>
          Disconnect Wallet: <br/>{address}
        </button>
      )}
      {!isConnected && (
        <button
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector: connectors[0] })}
        >
          Connect Browser Wallet
          {!connector.ready && " (unsupported)"}
          {isConnecting &&
            connector.id === pendingConnector?.id &&
            " (connecting)"}
        </button>
      )}
    </div>
  );
};
