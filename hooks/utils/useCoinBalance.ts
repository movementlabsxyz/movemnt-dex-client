import { useEffect, useState, useCallback } from 'react';

import { useAptos } from '@/contexts/AptosContext';

import { getCoinBalance } from '@/services/coinUtils';

import {Coin} from "@/types/Coin";

const useCoinBalance = (accountAddress: string | undefined, coin: Coin | null) => {

    const { client } = useAptos();

    const [balance, setBalance] = useState(0);
    const [loading, setLoading] = useState(false);

    const getBalance = useCallback(async () => {
        if(!accountAddress || !coin) return;
        setLoading(true);
        const coinBalance = await getCoinBalance(client, coin, accountAddress);
        if(coinBalance !== balance) {
            setBalance(coinBalance);
        }
        setLoading(false);
    }, [accountAddress, balance, client, coin])

    useEffect(() => {
        getBalance();
    }, [coin, client, getBalance])

    return {
        balance,
        loading
    };
}

export default useCoinBalance