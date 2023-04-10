import { useState } from "react";

import {Coin} from "@/types/Coin";

const useAddLiquidity = () => {

    const [coin1, setCoin1] = useState<Coin | null>(null);
    const [coin2, setCoin2] = useState<Coin | null>(null);
    const [coin1Amount, setCoin1Amount] = useState<number>(0);
    const [coin2Amount, setCoin2Amount] = useState<number>(0);

    const updateCoin1 = async (coin: Coin) => {
        setCoin1(coin);
    }

    const updateCoin1Amount = async (amount: number) => {
        setCoin1Amount(amount);
    }

    const updateCoin2 = async (coin: Coin) => {
        setCoin2(coin);
    }

    const updateCoin2Amount = async (amount: number) => {
        setCoin2Amount(amount);
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
        onAddLiquidity
    }
}

export default useAddLiquidity;