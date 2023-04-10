import { useState, useMemo } from "react";

import {useAptos} from "@/contexts/AptosContext";

import useSubmitTransaction from "@/hooks/useSubmitTransaction";

import {getCoin1Amount, getCoin2Amount} from "@/services/dexLpCalculations";

import {Coin} from "@/types/Coin";
import {buildAddLiquidityPayload} from "@/services/dexPayloadBuilder";
import {CurveType} from "@/types/CurveType";

const useAddLiquidity = () => {

    const { client } = useAptos();

    const { submitTransaction } = useSubmitTransaction();

    const [coin1, setCoin1] = useState<Coin | null>(null);
    const [coin2, setCoin2] = useState<Coin | null>(null);
    const [coin1Amount, setCoin1Amount] = useState<number>(0);
    const [coin2Amount, setCoin2Amount] = useState<number>(0);

    const disabled = useMemo(() => (
        !coin1 || !coin2 || coin1Amount === 0 || coin2Amount === 0
    ), [coin1, coin1Amount, coin2, coin2Amount]);

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
        setCoin2Amount(coin2Amount);
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
        setCoin1Amount(coin1Amount);
    }

    const updateCoin1 = async (coin: Coin) => {
        setCoin1(coin);
        await fetchCoin1Amount(coin2Amount, coin, coin2);
    }

    const updateCoin1Amount = async (amount: number) => {
        setCoin1Amount(amount);
        await fetchCoin2Amount(amount, coin1, coin2);
    }

    const updateCoin2 = async (coin: Coin) => {
        setCoin2(coin);
        await fetchCoin2Amount(coin1Amount, coin1, coin);
    }

    const updateCoin2Amount = async (amount: number) => {
        setCoin2Amount(amount);
        await fetchCoin1Amount(amount, coin1, coin2);
    }

    const onAddLiquidity = async () => {
        if(!coin1 || !coin2 || coin1Amount <= 0 || coin2Amount <= 0) return;
        const payload = buildAddLiquidityPayload(
            coin1,
            coin2,
            curveType,
            coin1Amount * 10 ** coin1.decimals,
            0,
            coin2Amount * 10 ** coin2.decimals,
            0
        );
        await submitTransaction(payload, {
            title: "Add Liquidity Succeeded",
            description: `You have successfully added ${coin1Amount} ${coin1.symbol} and ${coin2Amount} ${coin2.symbol} to the liquidity pool.`
        });
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