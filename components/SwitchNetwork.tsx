import { NetworkMetadata } from "@3rdweb/hooks";
import { useState } from "react";
import Image from "next/image";

interface Props {
  switchNetwork: (newChainId: number) => Promise<void>;
  getNetworkMetadata: (chainId: number) => NetworkMetadata;
}

const SwitchNetwork = ({ switchNetwork, getNetworkMetadata }: Props) => {
  const supportedChainIds = [80001, 4];

  const [activeNetwork, setActiveNetwork] = useState("mumbai");

  //   console.log("activeNetwork", activeNetwork);
  return (
    <div className="flex justify-center items-center">
      <button
        className={`px-4 mr-4 flex justify-center items-center py-4 rounded-md  ${
          activeNetwork === "Mumbai" ? "bg-[#B67DFF]" : "bg-purple-200"
        } cursor-pointer hover:bg-purple-500 text-xl font-semibold duration-100 text-white`}
        onClick={() => {
          switchNetwork(80001).then(() =>
            setActiveNetwork(getNetworkMetadata(80001).chainName)
          );
        }}
      >
        <Image
          src="/PolygonLogo.svg"
          alt="logo"
          width={50}
          height={40}
          className="rounded-full"
        />
        <p className="ml-2"> Mumbai Polygon Network</p>{" "}
      </button>
      {/* <button
        className={`px-4 mr-4 flex justify-center items-center py-4 rounded-md  ${
          activeNetwork === "Mumbai" ? "bg-[#B67DFF]" : "bg-purple-200"
        } cursor-pointer hover:bg-purple-500 text-xl font-semibold duration-100 text-white`}
        onClick={() => {
          switchNetwork(3).then(() =>
            setActiveNetwork(getNetworkMetadata(3).chainName)
          );
        }}
      >
        <Image
          src="/PolygonLogo.svg"
          alt="logo"
          width={50}
          height={40}
          className="rounded-full"
        />
        <p className="ml-2"> Ropsten Network</p>{" "}
      </button> */}
      <button
        className={`px-4 flex justify-center items-center py-4 rounded-md  ${
          activeNetwork === "Rinkeby" ? "bg-purple-600" : "bg-purple-200"
        } cursor-pointer hover:bg-purple-500 text-xl font-semibold duration-100 text-white`}
        onClick={() => {
          switchNetwork(4).then(() =>
            setActiveNetwork(getNetworkMetadata(4).chainName)
          );
        }}
      >
        <Image
          src="/EthLogo.svg"
          alt="logo"
          width={50}
          height={40}
          className="rounded-full"
        />
        <p className="ml-2"> Rinkeby Testnet</p>{" "}
      </button>
    </div>
  );
};

export default SwitchNetwork;
