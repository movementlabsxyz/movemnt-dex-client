import { useState, useEffect, useCallback } from "react";

import {Coin} from "@/types/Coin";
import {getReservesSize} from "@/services/dexLpCalculations";
import {useAptos} from "@/contexts/AptosContext";
import {isSwapExists} from "@/services/dexUtils";

const usePoolReserves = (coinX: Coin | null, coinY: Coin | null) => {

    const { client } = useAptos();

    const [loading, setLoading] = useState<boolean>(true);
    const [coinXReserve, setCoinXReserve] = useState<number>(0);
    const [coinYReserve, setCoinYReserve] = useState<number>(0);
    const [poolExists, setPoolExists] = useState<boolean>(false);

    const fetchPoolReserves = useCallback(async () => {
        if(!coinX || !coinY) return;
        setLoading(true);
        const [
            poolExists,
            [coinXReserve, coinYReserve]
        ] = await Promise.all([
            isSwapExists(client, coinX, coinY, "Uncorrelated"),
            getReservesSize(client, coinX, coinY, "Uncorrelated")
        ])
        setPoolExists(poolExists);
        setCoinXReserve(coinXReserve);
        setCoinYReserve(coinYReserve);
        setLoading(false);
    }, [client, coinX, coinY])

    useEffect(() => {
        fetchPoolReserves();
    }, [fetchPoolReserves])

    return {
        loading,
        poolExists,
        coinXReserve,
        coinYReserve,
    }
}

export default usePoolReserves;