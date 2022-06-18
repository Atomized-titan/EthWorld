import { useWeb3 } from "@3rdweb/hooks";
import { useRouter } from "next/router";

const Dashboard = () => {
  const {
    connectWallet,
    address,
    error,
    chainId,
    balance,
    getNetworkMetadata,
  } = useWeb3();

  useRouter().push("/dashboard/user");
  return null;
};

export default Dashboard;
