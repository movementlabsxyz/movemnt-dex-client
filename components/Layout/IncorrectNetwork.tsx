import React from 'react';

import {Card, Text, VStack} from "@chakra-ui/react";

import {RPC_URL} from "@/data/rpcURL";

const IncorrectNetwork = () => {
    return (
        <Card
            bg='white'
            p={4}
        >
            <VStack
                w='100%'
                alignItems='flex-start'
            >
                <Text
                    fontSize='xl'
                    fontWeight='bold'
                >
                    Incorrect Network
                </Text>
                <Text>
                    You must connect to the Movemnt Subnet with RPC URL {RPC_URL} to access this page.
                </Text>
            </VStack>
        </Card>

    );
};

export default IncorrectNetwork;
