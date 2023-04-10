import { useState } from "react";

import {Coin} from "@/types/Coin";

const useSwap = () => {

    const [inputCoin, setInputCoin] = useState<Coin | null>(null);
    const [outputCoin, setOutputCoin] = useState<Coin | null>(null);
    const [inputAmount, setInputAmount] = useState<number>(0);
    const [outputAmount, setOutputAmount] = useState<number>(0);

    const updateInputCoin = async (coin: Coin) => {
        setInputCoin(coin);
    }

    const updateInputAmount = async (amount: number) => {
        setInputAmount(amount);
    }

    const updateOutputCoin = async (coin: Coin) => {
        setOutputCoin(coin);
    }

    const updateOutputAmount = async (amount: number) => {
        setOutputAmount(amount);
    }

    const swapCoins = async () => {
        const tempCoin = inputCoin;
        setInputCoin(outputCoin);
        setOutputCoin(tempCoin);
        const tempAmount = inputAmount;
        setInputAmount(outputAmount);
        setOutputAmount(tempAmount);
    }

    const onSwap = async () => {

    }

    return {
        inputCoin,
        outputCoin,
        inputAmount,
        outputAmount,
        updateInputCoin,
        updateInputAmount,
        updateOutputCoin,
        updateOutputAmount,
        swapCoins,
        onSwap
    }
}

export default useSwap;