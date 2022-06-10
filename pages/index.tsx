import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useWeb3, useSwitchNetwork } from "@3rdweb/hooks";
import "regenerator-runtime/runtime";
import SwitchNetwork from "../components/SwitchNetwork";
import { useRouter } from "next/router";
import Image from "next/image";
import KnowMore from "../components/KnowMore";
import useScrollPosition from "../hooks/useScrollPosition";
import ConnectWallet from "../components/ConnectWallet";

const Home: NextPage = () => {
  const {
    connectWallet,
    address,
    error,
    chainId,
    balance,
    getNetworkMetadata,
  } = useWeb3();
  const { switchNetwork } = useSwitchNetwork();

  error ? console.log(error) : null;

  const router = useRouter();

  const scrollPosition = useScrollPosition();

  return (
    <div>
      <main className="flex flex-col  justify-center items-center font-DmSans">
        <div className="mt-14 text-[56px]">
          <span className=" text-white font-semibold flex-nowrap">
            Making <span className="text-[#B67DFF]">Crypto Transfer</span>{" "}
            Simpler.
          </span>
        </div>
        <div className="text-2xl text-white font-light mt-4">
          Start transferring your crypto now by connecting your wallet with your
          friends and family.
        </div>
        <div className="flex flex-col items-center justify-center mt-10 py-2 ">
          {address && chainId ? (
            <div>
              <div className="mt-6">
                <SwitchNetwork
                  switchNetwork={switchNetwork}
                  getNetworkMetadata={getNetworkMetadata}
                />
              </div>
              <p className="px-6 py-4 rounded-full bg-gray-200 hover:bg-gray-300 font-mono font-medium cursor-pointer duration-100">
                Your chainId is : {chainId} <br /> Your balance is :{" "}
                {balance?.formatted}{" "}
                {getNetworkMetadata(chainId).chainName === "Rinkeby"
                  ? "ETH"
                  : "MATIC"}
              </p>
            </div>
          ) : (
            <ConnectWallet connectWallet={connectWallet} />
          )}
        </div>
        {address ? (
          <div className="flex flex-col items-center justify-center  py-2 ">
            <p className={styles.description}>
              Your wallet address <code className={styles.code}>{address}</code>
            </p>
            <button
              className="px-4 py-2 rounded-md bg-blue-700 cursor-pointer hover:bg-purple-500 text-xl font-semibold duration-100 text-white"
              onClick={() => router.push("/dashboard")}
            >
              Go to dashboard{" "}
            </button>
          </div>
        ) : null}
      </main>
      <section className="z-10">
        <div
          className="h-[400px] mt-12 relative  -mb-40"
          style={{ marginBottom: -(scrollPosition / 2) }}
        >
          <div>
            <Image
              src="/cardBunch.svg"
              alt="wallet caard"
              layout="fill"
              objectPosition={"center"}
              width={100}
              height={100}
            />
          </div>
        </div>
      </section>
      <KnowMore />
      <div className="h-screen">hello</div>
    </div>
  );
};

export default Home;
