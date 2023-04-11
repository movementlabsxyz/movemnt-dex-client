import { useEffect, useState, useCallback } from 'react';

import { useAptos } from '@/contexts/AptosContext';

import { getCoinBalance } from '@/services/coinUtils';

import {Coin} from "@/types/Coin";

const useCoinBalance = (accountAddress: string | undefined, coin: Coin | null) => {

    const { client } = useAptos();

    const [balance, setBalance] = useState(0);

    const getBalance = useCallback(async () => {
        if(!accountAddress || !coin) return;
        const coinBalance = await getCoinBalance(client, coin, accountAddress);
        if(coinBalance !== balance) {
            setBalance(coinBalance);
        }
    }, [accountAddress, balance, client, coin])

    useEffect(() => {
        getBalance();
    }, [coin, client, getBalance])

    return balance;
}

export default useCoinBalance