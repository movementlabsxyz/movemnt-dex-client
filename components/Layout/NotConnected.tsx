import React from 'react';

import {Heading, Text, VStack} from "@chakra-ui/react";

import Card from "@/components/Utilities/Card";
import ConnectWallet from "@/components/Navbar/ConnectWallet";

const NotConnected = () => {
    return (
        <Card>
            <VStack
                spacing={4}
            >
                <Heading
                    fontSize='2xl'
                    fontWeight='bold'
                    textAlign='center'
                >
                    Welcome to Movement
                </Heading>
                <Text>
                    Please connect your wallet to get started
                </Text>
                <ConnectWallet />
            </VStack>
        </Card>
    );
};

export default NotConnected;
