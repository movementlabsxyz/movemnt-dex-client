import Head from 'next/head'

import Layout from "@/components/Layout";
import AddLiquidity from "@/components/AddLiquidity";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Pools - Movement DEX</title>
        <meta name="description" content="Add Liquidity to the simple DEX on the Movement Subnet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <AddLiquidity />
      </Layout>
    </>
  )
}
