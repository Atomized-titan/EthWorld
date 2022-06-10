import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

import "regenerator-runtime/runtime";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const supportedChainIds = [80001, 4];

  const connectors = {
    injected: {},
  };

  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
