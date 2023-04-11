import React from 'react';

import {Button, VStack} from "@chakra-ui/react";

import LPCoinInput from "@/components/Utilities/LPCoinInput";

import useRemoveLiquidity from "@/hooks/useRemoveLiquidity";
import PoolReserves from "@/components/PoolReserves";
import OutputAmounts from "@/components/RemoveLiquidity/OutputAmounts";

const RemoveLiquidity = () => {

    const {
        lpCoin,
        lpCoinAmount,
        updateLpCoin,
        updateLpCoinAmount,
        loading,
        coinXAmount,
        coinYAmount,
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
            <OutputAmounts
                coinX={lpCoin?.coinX || null}
                coinY={lpCoin?.coinY || null}
                amountX={coinXAmount}
                amountY={coinYAmount}
                loading={loading}
            />
            <PoolReserves 
                coinX={lpCoin?.coinX || null}
                coinY={lpCoin?.coinY || null}
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
