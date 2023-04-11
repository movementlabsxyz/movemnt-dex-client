import React from 'react';
import {Coin} from "@/types/Coin";
import usePoolReserves from "@/hooks/usePoolReserves";
import {Flex, Text, VStack} from "@chakra-ui/react";
import PoolReserve from "@/components/PoolReserves/PoolReserve";

interface Props {
    coinX: Coin | null,
    coinY: Coin | null,
}

const PoolReserves: React.FC<Props> = ({ coinX, coinY }) => {

    const {
        loading,
        poolExists,
        coinXReserve,
        coinYReserve,
    } = usePoolReserves(coinX, coinY);

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
                Pool Reserves
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
                                poolExists ? (
                                    <>
                                        <PoolReserve
                                            coin={coinX}
                                            reserve={coinXReserve}
                                            loading={loading}
                                        />
                                        <PoolReserve
                                            coin={coinY}
                                            reserve={coinYReserve}
                                            loading={loading}
                                        />
                                    </>
                                ) : (
                                    <Text
                                        fontSize='lg'
                                        fontWeight='bold'
                                    >
                                        Pool Does Not Exist
                                    </Text>
                                )
                        )
                    )
                }
            </Flex>
        </VStack>
    );
};

export default PoolReserves;
