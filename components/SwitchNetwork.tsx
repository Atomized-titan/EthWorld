import { NetworkMetadata } from "@3rdweb/hooks";
import { useState } from "react";

interface Props {
  switchNetwork: (newChainId: number) => Promise<void>;
  getNetworkMetadata: (chainId: number) => NetworkMetadata;
}

const SwitchNetwork = ({ switchNetwork, getNetworkMetadata }: Props) => {
  const supportedChainIds = [80001, 4];

  const [activeNetwork, setActiveNetwork] = useState("mumbai");

  console.log("activeNetwork", activeNetwork);
  return (
    <div className="flex ">
      <button
        className={`px-4 py-2 rounded-md  ${
          activeNetwork === "Mumbai" ? "bg-purple-600" : "bg-purple-200"
        } cursor-pointer hover:bg-purple-500 text-xl font-semibold duration-100 text-white`}
        onClick={() => {
          switchNetwork(80001).then(() =>
            setActiveNetwork(getNetworkMetadata(80001).chainName)
          );
        }}
      >
        Mumbai Polygon Network
      </button>
      <button
        className={`px-4 py-2 rounded-md  ${
          activeNetwork === "Rinkeby" ? "bg-purple-600" : "bg-purple-200"
        } cursor-pointer hover:bg-purple-500 text-xl font-semibold duration-100 text-white`}
        onClick={() => {
          switchNetwork(4).then(() =>
            setActiveNetwork(getNetworkMetadata(4).chainName)
          );
        }}
      >
        Rinkeby Testnet
      </button>
    </div>
  );
};

export default SwitchNetwork;
