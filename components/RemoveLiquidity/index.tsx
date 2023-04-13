import React from 'react';

import {VStack} from "@chakra-ui/react";

import LPCoinInput from "@/components/Utilities/LPCoinInput";
import Button from "@/components/Utilities/Button";
import PoolReserves from "@/components/PoolReserves";
import OutputAmounts from "@/components/RemoveLiquidity/OutputAmounts";

import useRemoveLiquidity from "@/hooks/useRemoveLiquidity";

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
                colorScheme='brand'
            >
                Remove Liquidity
            </Button>
        </VStack>
    );
};

export default RemoveLiquidity;
