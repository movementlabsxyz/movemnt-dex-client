import React, {useEffect, useState} from 'react';

import {Flex, NumberInput, NumberInputField, VStack, Text} from "@chakra-ui/react";

interface Props {
    decimals: number;
    max?: number;
    amount: number;
    setAmount: (amount: number) => void;
    rightAddon?: React.ReactNode;
    label?: string;
}

const CoinAmountInput: React.FC<Props> = ({ decimals, max, amount, setAmount, rightAddon, label }) => {

    const [amountAsString, setAmountAsString] = useState<string>("");

    useEffect(() => {
        if(amount === 0) {
            setAmountAsString("");
        } else {
            setAmountAsString(amount.toString());
        }
    }, [decimals, amount]);

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
                spacing={0}
            >
                {
                    label && (
                        <Text
                            fontSize='xs'
                            fontWeight='medium'
                        >
                            {label}
                        </Text>
                    )
                }
                <NumberInput
                    value={amountAsString}
                    onChange={handleTextChange}
                    w='100%'
                    max={max}
                    precision={decimals}
                    defaultValue={0}
                    focusBorderColor='brand.500'
                    onFocus={onFocus}
                    variant='flushed'
                >
                    <NumberInputField
                        placeholder={decimals ? `0.${'0'.repeat(decimals)}` : "Select Coin"}
                    />
                </NumberInput>
            </VStack>
            {rightAddon}
        </Flex>
    );
};

export default CoinAmountInput;
