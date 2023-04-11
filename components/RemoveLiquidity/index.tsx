import React from 'react';

import {Button, VStack} from "@chakra-ui/react";

import LPCoinInput from "@/components/Utilities/LPCoinInput";

import useRemoveLiquidity from "@/hooks/useRemoveLiquidity";

const RemoveLiquidity = () => {

    const {
        lpCoin,
        lpCoinAmount,
        updateLpCoin,
        updateLpCoinAmount,
        disabled,
        onRemoveLiquidity
    } = useRemoveLiquidity();

    return (
        <VStack
            spacing={4}
        >
            <LPCoinInput
                label="LP Coin Amount"
                amount={lpCoinAmount}
                setAmount={updateLpCoinAmount}
                lpCoin={lpCoin}
                setLpCoin={updateLpCoin}
                isBalanceMax
            />
            <Button
                onClick={onRemoveLiquidity}
                w='100%'
                isDisabled={disabled}
            >
                Remove Liquidity
            </Button>
        </VStack>
    );
};

export default RemoveLiquidity;
