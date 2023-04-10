import React from 'react';

import {VStack, Text, IconButton, Button} from "@chakra-ui/react";

import { MdOutlineSwapVert } from "react-icons/md";

import Card from "@/components/Utilities/Card";
import SwapInput from "@/components/Swap/SwapInput";

import useSwap from "@/hooks/useSwap";

const Swap = () => {

    const {
        inputCoin,
        updateInputCoin,
        inputAmount,
        updateInputAmount,
        outputCoin,
        updateOutputCoin,
        outputAmount,
        updateOutputAmount,
        swapCoins,
        onSwap,
        disabled
    } = useSwap();

    return (
        <Card>
            <VStack
                spacing={4}
            >
                <Text
                    fontSize='2xl'
                    fontWeight='bold'
                >
                    Swap
                </Text>
                <SwapInput
                    label="From"
                    amount={inputAmount}
                    setAmount={updateInputAmount}
                    coin={inputCoin}
                    setCoin={updateInputCoin}
                    excludeSymbols={outputCoin ? [outputCoin.symbol] : []}
                />
                <IconButton
                    aria-label='SwapCoins'
                    icon={<MdOutlineSwapVert />}
                    onClick={swapCoins}
                />
                <SwapInput
                    label="To"
                    amount={outputAmount}
                    setAmount={updateOutputAmount}
                    coin={outputCoin}
                    setCoin={updateOutputCoin}
                    excludeSymbols={inputCoin ? [inputCoin.symbol] : []}
                />
                <Button
                    onClick={onSwap}
                    w='100%'
                    isDisabled={disabled}
                >
                    Swap
                </Button>
            </VStack>
        </Card>
    );
};

export default Swap;
