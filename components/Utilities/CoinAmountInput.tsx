import React, {useEffect, useState} from 'react';

import {Flex, NumberInput, NumberInputField, VStack, Text, useColorModeValue} from "@chakra-ui/react";
import {Coin} from "@/types/Coin";
import useCoinBalance from "@/hooks/utils/useCoinBalance";
import {useWallet} from "@manahippo/aptos-wallet-adapter";

interface Props {
    coin: Coin | null
    amount: number;
    setAmount: (amount: number) => void;
    rightAddon?: React.ReactNode;
    label?: string;
    isBalanceMax?: boolean;
}

const CoinAmountInput: React.FC<Props> = ({ coin, amount, setAmount, rightAddon, label, isBalanceMax }) => {

    const { account } = useWallet();

    const {balance, loading} = useCoinBalance(account?.address?.toString(), coin);

    const [amountAsString, setAmountAsString] = useState<string>("");

    useEffect(() => {
        if(amount === 0) {
            setAmountAsString("");
        } else {
            setAmountAsString(amount.toString());
        }
    }, [amount]);

    const handleTextChange = (value: string) => {
        setAmountAsString(value);
        if(value == ""){
            setAmount(0);
        } else if(value[value.length-1] !== "."){
            setAmount(parseFloat(value));
        }
    }

    const onFocus = () => {
        if(amount === 0){
            setAmountAsString("");
        }
    }

    const subTextColor = useColorModeValue("blackAlpha.700", "whiteAlpha.700")

    return (
        <Flex
            w='100%'
            alignItems='center'
            justifyContent='space-between'
            borderWidth={2}
            borderRadius='md'
            p={4}
            gap={4}
        >
            <VStack
                alignItems='flex-start'
                w='100%'
                spacing={1}
            >
                {
                    label && (
                        <Text
                            fontWeight='medium'
                        >
                            {label}
                        </Text>
                    )
                }
                {
                    coin && (
                        <Text
                            fontSize='xs'
                            fontWeight='medium'
                            color={subTextColor}
                        >
                            Balance: {loading ? "Loading..." : `${balance} ${coin.symbol}`}
                        </Text>
                    )
                }
                <NumberInput
                    value={amountAsString}
                    onChange={handleTextChange}
                    w='100%'
                    max={isBalanceMax ? balance : undefined}
                    defaultValue={0}
                    focusBorderColor='brand.500'
                    onFocus={onFocus}
                    variant='flushed'
                    size='lg'
                >
                    <NumberInputField
                        placeholder={coin ? `0.${'0'.repeat(coin.decimals)}` : "Select Coin"}
                    />
                </NumberInput>
            </VStack>
            {rightAddon}
        </Flex>
    );
};

export default CoinAmountInput;
