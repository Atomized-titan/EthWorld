import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThirdwebWeb3Provider, ThirdwebWeb3ProviderProps } from '@3rdweb/hooks'

import 'regenerator-runtime/runtime'
import Layout from '../components/Layout'
import { RouteGuard } from '../components/RouteGuard'
import { FC, ReactNode } from 'react'

const Web3Provider: FC<ThirdwebWeb3ProviderProps & { children: ReactNode }> =
  ThirdwebWeb3Provider

function MyApp({ Component, pageProps }: AppProps) {
  const supportedChainIds = [80001, 4, 3]

  const connectors = {
    injected: {},
  }

  return (
    <Web3Provider supportedChainIds={supportedChainIds} connectors={connectors}>
      <RouteGuard>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RouteGuard>
    </Web3Provider>
  )
}

export default MyApp
