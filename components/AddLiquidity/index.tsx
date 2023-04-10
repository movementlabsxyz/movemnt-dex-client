import React from 'react';

import {Button, Text, VStack} from "@chakra-ui/react";

import Card from "@/components/Utilities/Card";
import SwapInput from "@/components/Utilities/SwapInput";

import useAddLiquidity from "@/hooks/useAddLiquidity";

const AddLiquidity = () => {

    const {
        coin1,
        coin2,
        coin1Amount,
        coin2Amount,
        updateCoin1,
        updateCoin2,
        updateCoin1Amount,
        updateCoin2Amount,
        onAddLiquidity,
        disabled
    } = useAddLiquidity()

    return (
        <Card>
            <VStack
                spacing={4}
            >
                <Text
                    fontSize='2xl'
                    fontWeight='bold'
                >
                    Add Liquidity
                </Text>
                <SwapInput
                    label="Coin 1"
                    amount={coin1Amount}
                    setAmount={updateCoin1Amount}
                    coin={coin1}
                    setCoin={updateCoin1}
                    excludeSymbols={coin2 ? [coin2.symbol] : []}
                />
                <SwapInput
                    label="Coin 2"
                    amount={coin2Amount}
                    setAmount={updateCoin2Amount}
                    coin={coin2}
                    setCoin={updateCoin2}
                    excludeSymbols={coin1 ? [coin1.symbol] : []}
                />
                <Button
                    onClick={onAddLiquidity}
                    w='100%'
                    isDisabled={disabled}
                >
                    Add Liquidity
                </Button>
            </VStack>
        </Card>
    );
};

export default AddLiquidity;
