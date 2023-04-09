import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'

import { WalletProvider, PontemWalletAdapter } from '@manahippo/aptos-wallet-adapter';

const wallets = [
    new PontemWalletAdapter(),
];

import theme from "@/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
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
  )
}
