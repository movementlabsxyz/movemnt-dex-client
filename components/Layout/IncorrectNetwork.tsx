import React from 'react';

import {Heading, Text, VStack} from "@chakra-ui/react";

import Card from "@/components/Utilities/Card";

import {RPC_URL} from "@/data/rpcURL";

const IncorrectNetwork = () => {
    return (
        <Card>
            <VStack
                spacing={4}
            >
                <Heading
                    fontSize='2xl'
                    fontWeight='bold'
                >
                    Incorrect Network
                </Heading>
                <Text
                    textAlign='center'
                >
                    You must connect to the Movement Subnet with RPC URL {RPC_URL} to access this page.
                </Text>
            </VStack>
        </Card>

    );
};

export default IncorrectNetwork;
