import { useState, useMemo } from "react";

import {useAptos} from "@/contexts/AptosContext";

import useSubmitTransaction from "@/hooks/utils/useSubmitTransaction";

import {getCoin1Amount, getCoin2Amount} from "@/services/dexLpCalculations";
import {isSorted} from "@/services/dexUtils";

import {Coin} from "@/types/Coin";
import {buildAddLiquidityPayload} from "@/services/dexPayloadBuilder";
import {CurveType} from "@/types/CurveType";

const useAddLiquidity = () => {

    const { client } = useAptos();

    const { submitTransaction } = useSubmitTransaction();

    const [coinX, setCoinX] = useState<Coin | null>(null);
    const [coinY, setCoinY] = useState<Coin | null>(null);
    const [coinXAmount, setCoinXAmount] = useState<number>(0);
    const [coinYAmount, setCoinYAmount] = useState<number>(0);

    const disabled = useMemo(() => (
        !coinX || !coinY || coinXAmount === 0 || coinYAmount === 0
    ), [coinX, coinXAmount, coinY, coinYAmount]);

    const curveType = useMemo<CurveType>(() => "Uncorrelated", []);

    const fetchCoin2Amount = async (coin1Amount: number, coin1: Coin | null, coin2: Coin | null) => {
        if(!coin1 || !coin2 || coin1Amount <= 0) return;
        const coin2Amount = await getCoin2Amount(
            client,
            coin1,
            coin2,
            curveType,
            coin1Amount
        );
        if(coin2Amount > 0) setCoinYAmount(coin2Amount);
    }

    const fetchCoin1Amount = async (coin2Amount: number, coin1: Coin | null, coin2: Coin | null) => {
        if(!coin1 || !coin2 || coin2Amount <= 0) return;
        const coin1Amount = await getCoin1Amount(
            client,
            coin1,
            coin2,
            curveType,
            coin2Amount
        );
        if(coin1Amount > 0) setCoinXAmount(coin1Amount);
    }

    const updateCoinX = async (coin: Coin) => {
        setCoinX(coin);
        await fetchCoin1Amount(coinYAmount, coin, coinY);
    }

    const updateCoinXAmount = async (amount: number) => {
        setCoinXAmount(amount);
        await fetchCoin2Amount(amount, coinX, coinY);
    }

    const updateCoinY = async (coin: Coin) => {
        setCoinY(coin);
        await fetchCoin2Amount(coinXAmount, coinX, coin);
    }

    const updateCoinYAmount = async (amount: number) => {
        setCoinYAmount(amount);
        await fetchCoin1Amount(amount, coinX, coinY);
    }

    const onAddLiquidity = async () => {
        if(!coinX || !coinY || coinXAmount <= 0 || coinYAmount <= 0) return;
        const isCoinsSorted = await isSorted(client, coinX, coinY);
        const payload = isCoinsSorted
            ? buildAddLiquidityPayload(
                coinX,
                coinY,
                curveType,
                coinXAmount * 10 ** coinX.decimals,
                0,
                coinYAmount * 10 ** coinY.decimals,
                0
            )
            : buildAddLiquidityPayload(
                coinY,
                coinX,
                curveType,
                coinYAmount * 10 ** coinY.decimals,
                0,
                coinXAmount * 10 ** coinX.decimals,
                0
            )
        await submitTransaction(payload, {
            title: "Add Liquidity Succeeded",
            description: `You have successfully added ${coinXAmount} ${coinX.symbol} and ${coinYAmount} ${coinY.symbol} to the liquidity pool.`
        });
    }

    return {
        coinX,
        coinY,
        coinXAmount,
        coinYAmount,
        updateCoinX,
        updateCoinXAmount,
        updateCoinY,
        updateCoinYAmount,
        onAddLiquidity,
        disabled
    }
}

export default useAddLiquidity;