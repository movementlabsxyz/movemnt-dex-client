import React from 'react';

import {Button, HStack, Text} from "@chakra-ui/react";

import {useWallet} from "@manahippo/aptos-wallet-adapter";

import useMvmtFaucet from "@/hooks/useMvmtFaucet";
import useCoinBalance from "@/hooks/utils/useCoinBalance";

import {MVMT} from "@/data/coins";

const MvmtFaucet = () => {

    const { account } = useWallet();

    const { onFaucet } = useMvmtFaucet();

    const {balance, loading} = useCoinBalance(account?.address?.toString(), MVMT);

    if(!account) return null;

    return (
        <HStack
            spacing={4}
        >
            <Text
                fontSize='sm'
                fontWeight={'bold'}
            >
                Balance: {loading ? "Loading..." : `${balance.toFixed(2)} ${MVMT.symbol}`}
            </Text>
            <Button
                onClick={onFaucet}
            >
                MVMT Faucet
            </Button>
        </HStack>
    );
};

export default MvmtFaucet;
