import { useConnectWallet } from "@3rdweb/hooks/dist/declarations/src/useConnectWallet";
import React from "react";

interface Props {
  connectWallet: ReturnType<typeof useConnectWallet>;
}

const ConnectWallet = ({ connectWallet }: Props) => {
  return (
    <div>
      {" "}
      <button
        className="px-11 py-4 rounded-2xl bg-purple-600 cursor-pointer hover:bg-purple-500 text-xl font-semibold duration-100 text-white"
        onClick={() => connectWallet("injected")}
      >
        Connect your Wallet
      </button>
    </div>
  );
};

export default ConnectWallet;
