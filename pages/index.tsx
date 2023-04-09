import Head from 'next/head'

import {Text} from "@chakra-ui/react";

import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Movement DEX</title>
        <meta name="description" content="Simple DEX on the Movement Subnet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Text>Movement DEX</Text>
      </Layout>
    </>
  )
}
