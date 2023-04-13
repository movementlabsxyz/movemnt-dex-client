import React from 'react';

import {Text, VStack} from "@chakra-ui/react";

import Card from "@/components/Utilities/Card";
import Button from "@/components/Utilities/Button";
import CoinInput from "@/components/Utilities/CoinInput";

import useFaucet from "@/hooks/useFaucet";

import coins from "@/data/coins";

const Faucet = () => {

    const {
        coin,
        coinAmount,
        disabled,
        updateCoin,
        updateCoinAmount,
        onFaucet
    } = useFaucet();

    return (
        <Card>
            <VStack
                spacing={4}
            >
                <Text
                    fontSize='2xl'
                    fontWeight='bold'
                    w='100%'
                    textAlign={'center'}
                >
                    Faucet
                </Text>
                <CoinInput
                    label="Faucet Amount"
                    amount={coinAmount}
                    setAmount={updateCoinAmount}
                    coin={coin}
                    setCoin={updateCoin}
                    coins={coins.filter(coinOption => coinOption.symbol !== coin?.symbol && coinOption.symbol !== 'MVMT')}
                />
                <Button
                    onClick={onFaucet}
                    w='100%'
                    isDisabled={disabled}
                    colorScheme='brand'
                >
                    Faucet
                </Button>
            </VStack>
        </Card>
    );
};

export default Faucet;
