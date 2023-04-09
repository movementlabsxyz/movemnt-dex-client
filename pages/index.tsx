import Head from 'next/head'

import Layout from "@/components/Layout";
import Home from "@/components/Home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Movement DEX</title>
        <meta name="description" content="Simple DEX on the Movement Subnet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Home />
      </Layout>
    </>
  )
}
