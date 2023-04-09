import React, {useEffect, useState} from 'react';

import {InputGroup, InputRightAddon, NumberInput, NumberInputField, VStack, Text} from "@chakra-ui/react";

interface Props {
    decimals: number;
    max?: number;
    amount: number;
    setAmount: (amount: number) => void;
    symbol?: string;
    label?: string;
}

const CoinAmountInput: React.FC<Props> = ({ decimals, max, amount, setAmount, symbol, label }) => {

    const zeroWithDecimals = `0.${'0'.repeat(decimals)}`;
    const [amountAsString, setAmountAsString] = useState(zeroWithDecimals);

    useEffect(() => {
        if(amount === 0) {
            setAmountAsString(zeroWithDecimals);
        } else {
            setAmountAsString(amount.toString());
        }
    }, [decimals, amount, zeroWithDecimals]);

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
        <VStack
            w='100%'
            alignItems='flex-start'
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
            <InputGroup>
                <NumberInput
                    value={amountAsString}
                    onChange={handleTextChange}
                    w='100%'
                    max={max}
                    precision={decimals}
                    defaultValue={0}
                    focusBorderColor='brand.500'
                    onFocus={onFocus}
                >
                    <NumberInputField />
                </NumberInput>
                {
                    symbol && <InputRightAddon>{symbol}</InputRightAddon>
                }
            </InputGroup>
        </VStack>
    );
};

export default CoinAmountInput;
