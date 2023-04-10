import { useState, useMemo } from "react";

import useSubmitTransaction from "@/hooks/useSubmitTransaction";

import {getInputAmount, getOutputAmount} from "@/services/dexSwapCalculations";

import {Coin} from "@/types/Coin";
import {buildSwapPayload} from "@/services/dexPayloadBuilder";
import {CurveType} from "@/types/CurveType";
import {useAptos} from "@/contexts/AptosContext";

const useSwap = () => {

    const { client } = useAptos();

    const { submitTransaction } = useSubmitTransaction();

    const [inputCoin, setInputCoin] = useState<Coin | null>(null);
    const [outputCoin, setOutputCoin] = useState<Coin | null>(null);
    const [inputAmount, setInputAmount] = useState<number>(0);
    const [outputAmount, setOutputAmount] = useState<number>(0);
    const [slippageTolerance, setSlippageTolerance] = useState<number>(0.01);

    const disabled = useMemo(() => (
        !inputCoin || !outputCoin || inputAmount <= 0
    ), [inputAmount, inputCoin, outputCoin]);

    const curveType = useMemo<CurveType>(() => "Uncorrelated", []);

    const fetchOutputAmount = async (inputAmount: number, inputCoin: Coin | null, outputCoin: Coin | null) => {
        if(!inputCoin || !outputCoin || inputAmount <= 0) return;
        const outputAmount = await getOutputAmount(
            client,
            inputAmount,
            inputCoin,
            outputCoin,
            curveType
        );
        setOutputAmount(outputAmount);
    }

    const fetchInputAmount = async (outputAmount: number, inputCoin: Coin | null, outputCoin: Coin | null) => {
        if(!inputCoin || !outputCoin || outputAmount <= 0) return;
        const inputAmount = await getInputAmount(
            client,
            outputAmount,
            inputCoin,
            outputCoin,
            curveType
        );
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

    const updateSlippageTolerance = async (tolerance: number) => {
        setSlippageTolerance(tolerance);
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
        if(!inputCoin || !outputCoin) return;
        const swapPayload = buildSwapPayload(
            inputCoin,
            outputCoin,
            curveType,
            inputAmount * 10 ** inputCoin.decimals,
            (outputAmount * 10 ** outputCoin.decimals) * (1 - slippageTolerance),
        );
        await submitTransaction(swapPayload, {
            title: "Swap Succeeded",
            description: `Swapped ${inputAmount} ${inputCoin?.symbol} for ${outputAmount} ${outputCoin?.symbol}`
        })
    }

    return {
        inputCoin,
        outputCoin,
        inputAmount,
        outputAmount,
        slippageTolerance,
        updateInputCoin,
        updateInputAmount,
        updateOutputCoin,
        updateOutputAmount,
        updateSlippageTolerance,
        swapCoins,
        onSwap,
        disabled
    }
}

export default useSwap;