import { useState, useMemo } from "react";

import {getCoin1Amount, getCoin2Amount} from "@/services/dexUtils";

import {Coin} from "@/types/Coin";

const useAddLiquidity = () => {

    const [coin1, setCoin1] = useState<Coin | null>(null);
    const [coin2, setCoin2] = useState<Coin | null>(null);
    const [coin1Amount, setCoin1Amount] = useState<number>(0);
    const [coin2Amount, setCoin2Amount] = useState<number>(0);

    const disabled = useMemo(() => (
        !coin1 || !coin2 || coin1Amount === 0 || coin2Amount === 0
    ), [coin1, coin1Amount, coin2, coin2Amount]);

    const fetchCoin2Amount = async (coin1Amount: number) => {
        if(!coin1 || !coin2 || coin1Amount <= 0) return;
        const coin2Amount = await getCoin2Amount(coin1Amount, coin1, coin2);
        setCoin2Amount(coin2Amount);
    }

    const fetchCoin1Amount = async (coin2Amount: number) => {
        if(!coin1 || !coin2 || coin2Amount <= 0) return;
        const coin1Amount = await getCoin1Amount(coin2Amount, coin1, coin2);
        setCoin1Amount(coin1Amount);
    }

    const updateCoin1 = async (coin: Coin) => {
        setCoin1(coin);
        await fetchCoin1Amount(coin2Amount);
    }

    const updateCoin1Amount = async (amount: number) => {
        setCoin1Amount(amount);
        await fetchCoin2Amount(amount);
    }

    const updateCoin2 = async (coin: Coin) => {
        setCoin2(coin);
        await fetchCoin2Amount(coin1Amount);
    }

    const updateCoin2Amount = async (amount: number) => {
        setCoin2Amount(amount);
        await fetchCoin1Amount(amount);
    }

    const onAddLiquidity = async () => {

    }

    return {
        coin1,
        coin2,
        coin1Amount,
        coin2Amount,
        updateCoin1,
        updateCoin1Amount,
        updateCoin2,
        updateCoin2Amount,
        onAddLiquidity,
        disabled
    }
}

export default useAddLiquidity;