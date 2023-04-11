import { useState, useMemo } from "react";

import {useAptos} from "@/contexts/AptosContext";

import useSubmitTransaction from "@/hooks/utils/useSubmitTransaction";

import {getOutputAmountsForLpAmount} from "@/services/dexLpCalculations";
import {buildRemoveLiquidityPayload} from "@/services/dexPayloadBuilder";

import {CurveType} from "@/types/CurveType";
import {LPCoin} from "@/types/LPCoin";

const useRemoveLiquidity = () => {

    const { client } = useAptos();

    const { submitTransaction } = useSubmitTransaction();

    const [lpCoin, setLpCoin] = useState<LPCoin | null>(null);
    const [lpCoinAmount, setLpCoinAmount] = useState<number>(0);

    const [coinXAmount, setCoinXAmount] = useState<number>(0);
    const [coinYAmount, setCoinYAmount] = useState<number>(0);

    const disabled = useMemo(() => (
        !lpCoin || lpCoinAmount === 0
    ), [lpCoin, lpCoinAmount]);

    const curveType = useMemo<CurveType>(() => "Uncorrelated", []);

    const fetchOutputAmounts = async (lpCoinAmount: number, lpCoin: LPCoin | null) => {
        if(!lpCoinAmount || !lpCoin) return;
        const [coinXAmount, coinYAmount] = await getOutputAmountsForLpAmount(
            client,
            lpCoin.coinX,
            lpCoin.coinY,
            curveType,
            lpCoinAmount
        );
        setCoinXAmount(coinXAmount);
        setCoinYAmount(coinYAmount);
    }

    const updateLpCoin = async (lpCoin: LPCoin) => {
        setLpCoin(lpCoin);
        await fetchOutputAmounts(lpCoinAmount, lpCoin);
    }

    const updateLpCoinAmount = async (amount: number) => {
        setLpCoinAmount(amount);
        await fetchOutputAmounts(amount, lpCoin);
    }

    const onRemoveLiquidity = async () => {
        if(!lpCoin || !lpCoinAmount) return;
        const payload = buildRemoveLiquidityPayload(
            lpCoin.coinX,
            lpCoin.coinY,
            curveType,
            lpCoinAmount * 10 ** lpCoin.decimals,
            0,
            0
        );
        await submitTransaction(payload, {
            title: "Remove Liquidity Succeeded",
            description: `You have successfully redeemed ${lpCoinAmount} ${lpCoin.symbol}.`
        });
    }

    return {
        lpCoin,
        lpCoinAmount,
        coinXAmount,
        coinYAmount,
        updateLpCoin,
        updateLpCoinAmount,
        onRemoveLiquidity,
        disabled
    }
}

export default useRemoveLiquidity;