import React from 'react';

import {Text, VStack} from "@chakra-ui/react";

import Card from "@/components/Utilities/Card";
import ConnectWallet from "@/components/Navbar/ConnectWallet";

const NotConnected = () => {
    return (
        <Card>
            <VStack
                spacing={4}
            >
                <Text
                    fontSize='2xl'
                    fontWeight='bold'
                >
                    Welcome to Movement
                </Text>
                <Text>
                    Please connect your wallet to get started
                </Text>
                <ConnectWallet />
            </VStack>
        </Card>
    );
};

export default NotConnected;
