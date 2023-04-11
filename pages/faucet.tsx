import Head from 'next/head'

import Layout from "@/components/Layout";
import Faucet from "@/components/Faucet";

export default function FaucetPage() {
  return (
    <>
      <Head>
        <title>Faucet - Movement DEX</title>
        <meta name="description" content="Simple DEX on the Movement Subnet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Faucet />
      </Layout>
    </>
  )
}
