import {useState} from "react";

import {useAptos} from "@/contexts/AptosContext";

import useSubmitTransaction from "@/hooks/utils/useSubmitTransaction";

import {buildRegisterPoolPayload} from "@/services/dexPayloadBuilder";
import {sortCoins} from "@/services/dexUtils";

import {Coin} from "@/types/Coin";

const useRegisterPool = () => {

    const { client } = useAptos();

    const { submitTransaction } = useSubmitTransaction();

    const [coinX, setCoinX] = useState<Coin | null>(null);
    const [coinY, setCoinY] = useState<Coin | null>(null);

    const updateCoinX = (coin: Coin) => {
        setCoinX(coin);
    }

    const updateCoinY = (coin: Coin) => {
        setCoinY(coin);
    }

    const onRegister = async () => {
        if(!coinX || !coinY) return;
        const [coin1, coin2] = await sortCoins(client, coinX, coinY);
        const payload = buildRegisterPoolPayload(coin1, coin2, "Uncorrelated");
        await submitTransaction(payload, {
            title: "Register Pool",
            description: `Registering pool for ${coinX.symbol} and ${coinY.symbol}`
        });
    }

    return {
        coinX,
        coinY,
        updateCoinX,
        updateCoinY,
        onRegister
    }

}

export default useRegisterPool