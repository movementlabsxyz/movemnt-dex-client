import { useState, useMemo } from "react";

import {Coin} from "@/types/Coin";
import {getInputAmount, getOutputAmount} from "@/services/dexUtils";

const useSwap = () => {

    const [inputCoin, setInputCoin] = useState<Coin | null>(null);
    const [outputCoin, setOutputCoin] = useState<Coin | null>(null);
    const [inputAmount, setInputAmount] = useState<number>(0);
    const [outputAmount, setOutputAmount] = useState<number>(0);

    const disabled = useMemo(() => (
        !inputCoin || !outputCoin || inputAmount <= 0
    ), [inputAmount, inputCoin, outputCoin]);

    const fetchOutputAmount = async (inputAmount: number, inputCoin: Coin | null, outputCoin: Coin | null) => {
        if(!inputCoin || !outputCoin || inputAmount <= 0) return;
        const outputAmount = await getOutputAmount(inputAmount, inputCoin, outputCoin);
        setOutputAmount(outputAmount);
    }

    const fetchInputAmount = async (outputAmount: number, inputCoin: Coin | null, outputCoin: Coin | null) => {
        if(!inputCoin || !outputCoin || outputAmount <= 0) return;
        const inputAmount = await getInputAmount(outputAmount, inputCoin, outputCoin);
        setInputAmount(inputAmount);
    }

    const updateInputCoin = async (coin: Coin) => {
        setInputCoin(coin);
        await fetchInputAmount(outputAmount, coin, outputCoin);
    }

    const updateInputAmount = async (amount: number) => {
        setInputAmount(amount);
        await fetchOutputAmount(amount, inputCoin, outputCoin);
    }

    const updateOutputCoin = async (coin: Coin) => {
        setOutputCoin(coin);
        await fetchOutputAmount(inputAmount, inputCoin, coin);
    }

    const updateOutputAmount = async (amount: number) => {
        setOutputAmount(amount);
        await fetchInputAmount(amount, inputCoin, outputCoin);
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
        onSwap,
        disabled
    }
}

export default useSwap;