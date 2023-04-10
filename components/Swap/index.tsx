import React from 'react';

import {VStack, Text, IconButton, Button, Box} from "@chakra-ui/react";

import { MdOutlineSwapVert } from "react-icons/md";

import Card from "@/components/Utilities/Card";
import SwapInput from "@/components/Utilities/SwapInput";

import useSwap from "@/hooks/useSwap";
import SlippageToleranceModal from "@/components/Swap/SlippageToleranceModal";

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
        slippageTolerance,
        updateSlippageTolerance,
        swapCoins,
        onSwap,
        disabled
    } = useSwap();

    return (
        <Card>
            <VStack
                spacing={4}
            >
                <Box
                    w='100%'
                    position='relative'
                >
                    <Text
                        fontSize='2xl'
                        fontWeight='bold'
                        w='100%'
                        textAlign={'center'}
                    >
                        Swap
                    </Text>
                    <Box
                        position='absolute'
                        right={0}
                        top={0}
                    >
                        <SlippageToleranceModal
                            slippageTolerance={slippageTolerance}
                            setSlippageTolerance={updateSlippageTolerance}
                        />
                    </Box>
                </Box>

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
