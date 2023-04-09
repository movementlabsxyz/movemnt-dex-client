import React from 'react';

import {VStack, Text, Button} from "@chakra-ui/react";

import useDemoTransfer from "@/hooks/useDemoTransfer";
import CoinAmountInput from "@/components/Utilities/CoinAmountInput";
import LabeledInput from "@/components/Utilities/LabeledInput";

const DemoTransfer = () => {

    const {
        transferAmount,
        setTransferAmount,
        transferAddress,
        setTransferAddress,
        onSubmit
    } = useDemoTransfer()

    return (
        <VStack
            w='100%'
            gap={4}
        >
            <Text
                fontSize='xl'
                fontWeight='bold'
            >
                Transfer Demo
            </Text>
            <CoinAmountInput
                decimals={8}
                amount={transferAmount}
                setAmount={setTransferAmount}
                symbol='MVMT'
                label='Transfer Amount'
            />
            <LabeledInput
                label="Recipient"
                value={transferAddress}
                onChange={setTransferAddress}
                placeholder={"Account Address"}
            />
            <Button
                onClick={onSubmit}
            >
                Send
            </Button>
        </VStack>
    );
};

export default DemoTransfer;
