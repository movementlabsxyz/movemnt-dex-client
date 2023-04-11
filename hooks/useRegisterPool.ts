import {useState, useMemo} from "react";

import {useAptos} from "@/contexts/AptosContext";

import useSubmitTransaction from "@/hooks/utils/useSubmitTransaction";

import {buildRegisterPoolPayload} from "@/services/dexPayloadBuilder";
import {isSwapExists, sortCoins} from "@/services/dexUtils";

import {Coin} from "@/types/Coin";

const useRegisterPool = () => {

    const { client } = useAptos();

    const { submitTransaction } = useSubmitTransaction();

    const [coinX, setCoinX] = useState<Coin | null>(null);
    const [coinY, setCoinY] = useState<Coin | null>(null);

    const [poolExists, setPoolExists] = useState<boolean>(false);
    const [poolExistsLoading, setPoolExistsLoading] = useState<boolean>(false);

    const disabled = useMemo(() => (
        !coinX || !coinY || poolExists || poolExistsLoading
    ), [coinX, coinY, poolExists, poolExistsLoading]);

    const fetchPoolExists = async (coinX: Coin | null, coinY: Coin | null) => {
        if(!coinX || !coinY) return;
        setPoolExistsLoading(true);
        const poolExists = await isSwapExists(client, coinX, coinY, "Uncorrelated");
        setPoolExists(poolExists);
        setPoolExistsLoading(false);
    }

    const updateCoinX = async (coin: Coin) => {
        setCoinX(coin);
        await fetchPoolExists(coin, coinY);
    }

    const updateCoinY = async (coin: Coin) => {
        setCoinY(coin);
        await fetchPoolExists(coinX, coin);
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
        poolExists,
        disabled,
        updateCoinX,
        updateCoinY,
        onRegister
    }

}

export default useRegisterPool