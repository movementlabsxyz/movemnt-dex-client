import React from 'react';

import {Box, Container, useColorModeValue} from "@chakra-ui/react";

import {useWallet} from "@manahippo/aptos-wallet-adapter";

import Navbar from "@/components/Navbar";
import IncorrectNetwork from "@/components/Layout/IncorrectNetwork";
import NotConnected from "@/components/Layout/NotConnected";

import {getCorrectNetwork} from "@/services/network";


interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {

    const { account, network } = useWallet();

    return (
        <Box
            bg={useColorModeValue('blackAlpha.50', 'blackAlpha.700')}
            minH='100vh'
            minW='100vw'
        >
            <Navbar />
            <Container
                py={8}
                maxW='2xl'
            >
                {
                    account === null ? (
                        <NotConnected />
                    ) : (
                        getCorrectNetwork(network?.api) ? (
                            children
                        ) : (
                            <IncorrectNetwork />
                        )
                    )
                }
            </Container>
        </Box>
    );
};

export default Layout;
