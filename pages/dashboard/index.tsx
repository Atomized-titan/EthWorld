import { useRouter } from "next/router";

const Dashboard = () => {
  useRouter().push("/dashboard/user");
  return null;
};

export default Dashboard;
