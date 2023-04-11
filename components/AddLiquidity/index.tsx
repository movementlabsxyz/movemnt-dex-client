import React from 'react';

import {Button, VStack} from "@chakra-ui/react";

import CoinInput from "@/components/Utilities/CoinInput";

import useAddLiquidity from "@/hooks/useAddLiquidity";

import coins from "@/data/coins";
import PoolReserves from "@/components/PoolReserves";

const AddLiquidity = () => {

    const {
        coinX,
        coinY,
        coinXAmount,
        coinYAmount,
        updateCoinX,
        updateCoinY,
        updateCoinXAmount,
        updateCoinYAmount,
        onAddLiquidity,
        disabled
    } = useAddLiquidity()

    return (
        <VStack
            spacing={4}
        >
            <CoinInput
                label="Coin 1"
                amount={coinXAmount}
                setAmount={updateCoinXAmount}
                coin={coinX}
                setCoin={updateCoinX}
                coins={coins.filter(coin => coin.symbol !== coinY?.symbol)}
                isBalanceMax
            />
            <CoinInput
                label="Coin 2"
                amount={coinYAmount}
                setAmount={updateCoinYAmount}
                coin={coinY}
                setCoin={updateCoinY}
                coins={coins.filter(coin => coin.symbol !== coinX?.symbol)}
                isBalanceMax
            />
            <PoolReserves
                coinX={coinX}
                coinY={coinY}
            />
            <Button
                onClick={onAddLiquidity}
                w='100%'
                isDisabled={disabled}
            >
                Add Liquidity
            </Button>
        </VStack>
    );
};

export default AddLiquidity;
