import React from 'react';

import {Text, useColorModeValue, VStack} from "@chakra-ui/react";

import {Coin} from "@/types/Coin";

interface Props {
    coin: Coin | null,
    amount: number;
    loading: boolean;
}

const OutputAmount: React.FC<Props> = ({ coin, amount, loading }) => {
    return (
        <VStack
            flex={1}
        >
            <Text
                fontSize='sm'
                fontWeight='medium'
                color={useColorModeValue("blackAlpha.700", "whiteAlpha.700")}
            >
                {
                    coin ? (
                        `${coin.symbol} Reserve`
                    ) : (
                        'Select Coin'
                    )
                }
            </Text>
            <Text
                fontSize='lg'
                fontWeight='bold'
            >
                {
                    !coin ? (
                        "No Coin Selected"
                    ) : (
                        loading
                            ? 'Loading...'
                            : amount
                    )
                }
            </Text>
        </VStack>
    );
};

export default OutputAmount;
