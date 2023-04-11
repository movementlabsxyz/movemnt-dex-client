import React from 'react';

import {VStack, Button, Text} from "@chakra-ui/react";

import CoinSelect from "@/components/Utilities/CoinSelect";
import useRegisterPool from "@/hooks/useRegisterPool";

import coins from "@/data/coins";

const RegisterPool = () => {

    const {
        coinX,
        coinY,
        poolExists,
        disabled,
        updateCoinX,
        updateCoinY,
        onRegister,
    } = useRegisterPool();

    return (
        <VStack
            spacing={4}
        >
            <CoinSelect
                coin={coinX}
                setCoin={updateCoinX}
                coins={coins.filter(coin => coin.symbol !== coinY?.symbol)}
            />
            <CoinSelect
                coin={coinY}
                setCoin={updateCoinY}
                coins={coins.filter(coin => coin.symbol !== coinX?.symbol)}
            />
            <Button
                onClick={onRegister}
                isDisabled={disabled}
            >
                Register Pool
            </Button>
            {
                poolExists && (
                    <Text
                        color='red.500'
                    >
                        Pool already exists
                    </Text>
                )
            }
        </VStack>
    );
};

export default RegisterPool;
