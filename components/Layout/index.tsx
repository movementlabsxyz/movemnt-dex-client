import React from 'react';

import {Box, Container} from "@chakra-ui/react";

import {useWallet} from "@manahippo/aptos-wallet-adapter";

import Navbar from "@/components/Navbar";
import IncorrectNetwork from "@/components/Layout/IncorrectNetwork";

import { RPC_URL } from "@/data/rpcURL";


interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {

    const { network } = useWallet();

    return (
        <Box
            bg='gray.50'
            minH='100vh'
            minW='100vw'
        >
            <Navbar />
            <Container>
                {
                    network?.api === RPC_URL ? (
                        children
                    ) : (
                        <IncorrectNetwork />
                    )
                }
            </Container>
        </Box>
    );
};

export default Layout;
