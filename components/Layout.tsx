import { useRouter } from "next/router";
import Link from "next/link";
import { FC } from "react";
import { accessibleOnClick } from "../utils/accessibleHandler";
import Image from "next/image";
import ConnectWallet from "./ConnectWallet";
import { useWeb3 } from "@3rdweb/hooks";
import truncateEthAddress from "../utils/truncateETHAddress";

type Props = {
  children: any;
};

const links = [
  {
    link: "/trademark/file",
    label: "About us",
  },
  {
    link: "/patent",
    label: "Features",
  },
  {
    link: "/trademark/file",
    label: "Reach us",
  },
];

const LandingLayout: FC<Props> = ({ children }) => {
  const {
    connectWallet,
    address,
    error,
    chainId,
    balance,
    getNetworkMetadata,
  } = useWeb3();

  const router = useRouter();
  const { pathname } = router;

  return (
    <div>
      <div className="flex justify-center items-center px-[140px] ">
        <div className="w-full  rounded-3xl mt-7 flex bg-[#383838] justify-between items-center py-6  px-16 font-DmSans">
          <div>
            <Image
              src="/logo.svg"
              alt="logo"
              width={110}
              height={40}
              className="rounded-full"
            />
          </div>
          <ul className="text-lg   font-medium leading-7 flex justify-center items-center">
            {links.map((link, index) => (
              <li
                key={index}
                className={`mr-10 ${
                  pathname === link.link ? "text-[#651871]" : "text-white"
                }`}
              >
                <Link href={link.link}>
                  <a
                    className="hover:text-[#D5C1ED] duration-100"
                    onClick={accessibleOnClick}
                  >
                    {link.label}
                  </a>
                </Link>
              </li>
            ))}
            {address && chainId ? (
              <div>
                {/* <div className="mt-6">
                  <SwitchNetwork
                    switchNetwork={switchNetwork}
                    getNetworkMetadata={getNetworkMetadata}
                  />
                </div> */}
                <div
                  {...accessibleOnClick(() => {
                    router.push("/dashboard/user");
                  })}
                  className="flex text-white text-sm rounded-xl py-2 pr-4  hover:bg-gray-300 font-mono font-medium cursor-pointer duration-100"
                >
                  <Image
                    src="/EthLogo.svg"
                    alt="logo"
                    width={110}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p>
                      {balance?.formatted}{" "}
                      {getNetworkMetadata(chainId).chainName === "Rinkeby"
                        ? "ETH"
                        : "MATIC"}{" "}
                    </p>
                    <p>
                      {truncateEthAddress(address)}(
                      {getNetworkMetadata(chainId).chainName})
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <li>
                <ConnectWallet connectWallet={connectWallet} />
              </li>
            )}
          </ul>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

const dashLinks: {
  label: string;
  link: string;
}[] = [
  // {
  //   label: 'Home',
  //   link: '/dashboard',
  // },
  {
    label: "User",
    link: "/dashboard/user",
  },
];

const DashLayout: FC<Props> = ({ children }) => {
  const { pathname, push } = useRouter();
  const page = dashLinks.find((l) => l.link === pathname);

  return (
    <div className="flex h-[100vh] w-full">
      <div className="flex h-full w-[274px] flex-col overflow-auto border-r border-gray-200 pb-11 shadow-xl">
        <div className="flex items-center justify-center py-7">
          <div
            className="flex items-center"
            {...accessibleOnClick(() => {
              push("/");
            })}
          >
            <h1 className="ml-3 text-2xl font-bold">EthWorld</h1>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="mt-16 mb-8 w-[180px] self-center text-base font-semibold text-gray-500">
            Navigation
          </p>
          {dashLinks.map(({ label, link }) => {
            const hightlight = pathname.includes(link);

            return (
              // eslint-disable-next-line react/jsx-key
              <Link passHref href={link}>
                <div
                  className={
                    "relative flex cursor-pointer justify-center py-3 fill-primary"
                  }
                >
                  <div className="flex w-[180px] items-center">
                    <p className={"ml-5 text-lg font-bold text-primary"}>
                      {label}
                    </p>
                  </div>
                  <div
                    className={"absolute right-0 top-0 bottom-0 w-1 bg-primary"}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="h-[100vh] flex-1 overflow-y-auto">
        {page && (
          <div className="flex items-center justify-between border-b border-gray-200 px-12 pt-8 pb-7">
            <div className="flex items-center">
              <h1 className="ml-4 text-xl font-bold">{page.label}</h1>
            </div>
          </div>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
};

const Layout: FC<Props> = (props: Props) => {
  const { pathname } = useRouter();
  const Wrapper: FC<Props> = pathname.includes("/dashboard")
    ? DashLayout
    : LandingLayout;
  return <Wrapper {...props} />;
};
export default Layout;
