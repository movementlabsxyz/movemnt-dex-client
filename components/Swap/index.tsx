import React from 'react';

import {VStack, Text, IconButton, Box, Heading} from "@chakra-ui/react";

import { MdOutlineSwapVert } from "react-icons/md";

import Card from "@/components/Utilities/Card";
import CoinInput from "@/components/Utilities/CoinInput";
import Button from "@/components/Utilities/Button";
import SlippageToleranceModal from "@/components/Swap/SlippageToleranceModal";
import PoolReserves from "@/components/PoolReserves";

import useSwap from "@/hooks/useSwap";

import coins from "@/data/coins";

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
        disabled,
        swapExists
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
                    <Heading
                        fontSize='2xl'
                        fontWeight='bold'
                        w='100%'
                        textAlign={'center'}
                    >
                        Swap
                    </Heading>
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

                <CoinInput
                    label="From"
                    amount={inputAmount}
                    setAmount={updateInputAmount}
                    coin={inputCoin}
                    setCoin={updateInputCoin}
                    coins={coins.filter(coin => coin.symbol !== outputCoin?.symbol)}
                    isBalanceMax
                />
                <IconButton
                    aria-label='SwapCoins'
                    icon={<MdOutlineSwapVert />}
                    onClick={swapCoins}
                />
                <CoinInput
                    label="To"
                    amount={outputAmount}
                    setAmount={updateOutputAmount}
                    coin={outputCoin}
                    setCoin={updateOutputCoin}
                    coins={coins.filter(coin => coin.symbol !== inputCoin?.symbol)}
                />
                <PoolReserves
                    coinX={inputCoin}
                    coinY={outputCoin}
                />
                <Button
                    onClick={onSwap}
                    w='100%'
                    isDisabled={disabled}
                    colorScheme='brand'
                >
                    Swap
                </Button>
                {
                    (inputCoin && outputCoin && !swapExists) && (
                        <Text
                            color='red.500'
                            fontSize='sm'
                        >
                            Pool does not exist
                        </Text>
                    )
                }
            </VStack>
        </Card>
    );
};

export default Swap;
