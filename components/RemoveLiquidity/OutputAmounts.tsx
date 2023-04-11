import React from 'react';

import {Flex, Text, VStack} from "@chakra-ui/react";

import {Coin} from "@/types/Coin";
import PoolReserve from "@/components/PoolReserves/PoolReserve";
import OutputAmount from "@/components/RemoveLiquidity/OutputAmount";

interface Props {
    coinX: Coin | null,
    coinY: Coin | null,
    amountX: number;
    amountY: number;
    loading: boolean;
}

const OutputAmounts: React.FC<Props> = ({ coinX, coinY, amountX, amountY, loading}) => {
    return (
        <VStack
            w='100%'
            borderWidth={2}
            rounded='lg'
            p={4}
        >
            <Text
                fontSize='sm'
                fontWeight='medium'
            >
                Output Amounts
            </Text>
            <Flex
                w='100%'
                justifyContent='center'
            >
                {
                    !coinX || !coinY ? (
                        <Text
                            fontSize='lg'
                            fontWeight='bold'
                        >
                            Select Coins
                        </Text>
                    ) : (
                        loading ? (
                            <Text
                                fontSize='lg'
                                fontWeight='bold'
                            >
                                Loading...
                            </Text>
                        ) : (
                            <>
                                <OutputAmount
                                    coin={coinX}
                                    amount={amountX}
                                    loading={loading}
                                />
                                <PoolReserve
                                    coin={coinY}
                                    reserve={amountY}
                                    loading={loading}
                                />
                            </>
                        )
                    )
                }
            </Flex>
        </VStack>
    );
};

export default OutputAmounts;
