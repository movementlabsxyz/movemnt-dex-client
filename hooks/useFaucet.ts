import { useState, useMemo } from "react";

import useSubmitTransaction from "@/hooks/utils/useSubmitTransaction";

import {Coin} from "@/types/Coin";
import {buildFaucetPayload} from "@/services/coinsPayloadBuilder";

const useFaucet = () => {

    const { submitTransaction } = useSubmitTransaction();

    const [coin, setCoin] = useState<Coin | null>(null);
    const [coinAmount, setCoinAmount] = useState<number>(0);

    const disabled = useMemo(() => (
        !coin || coinAmount <= 0
    ), [coin, coinAmount]);

    const updateCoin = (coin: Coin) => {
        setCoin(coin);
    }

    const updateCoinAmount = (coinAmount: number) => {
        setCoinAmount(coinAmount);
    }

    const onFaucet = async () => {
        if(!coin || coinAmount <= 0) return;
        const success = await submitTransaction(buildFaucetPayload(coin, coinAmount), {
            title: "Faucet Succeeded!",
            description: `You have received ${coinAmount} ${coin.symbol}!`,
        })
        if(success) {
            setCoinAmount(0);
        }
    }

    return {
        coin,
        coinAmount,
        disabled,
        updateCoin,
        updateCoinAmount,
        onFaucet,
    }
}

export default useFaucet;