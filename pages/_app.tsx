import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'

import "@fontsource/sora"
import "@fontsource/ibm-plex-mono"

import { WalletProvider, PontemWalletAdapter } from '@manahippo/aptos-wallet-adapter';

const wallets = [
    new PontemWalletAdapter(),
];

import {AptosProvider} from "@/contexts/AptosContext";

import theme from "@/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <AptosProvider>
          <WalletProvider
              wallets={wallets}
              autoConnect
          >
              <ChakraProvider
                theme={theme}
              >
                <Component {...pageProps} />
              </ChakraProvider>
          </WalletProvider>
      </AptosProvider>
  )
}
