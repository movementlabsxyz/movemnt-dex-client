import {AptosClient} from "aptos";

import {moduleToString, structToString} from "@/services/moveUtils";

import {routerModule} from "@/data/modules";
import {curve} from "@/data/curves";

import {Coin} from "@/types/Coin";
import {CurveType} from "@/types/CurveType";
import {LPCoin} from "@/types/LPCoin";

export const getOutputAmountsForLpAmount = async (
    client: AptosClient,
    lpCoin: LPCoin,
    curveType: CurveType,
    lpAmount: number,
): Promise<number[]> => {
    return client.view({
        function: `${moduleToString(routerModule)}::get_reserves_for_lp_coins`,
        arguments: [
            Math.round(lpAmount * 10 ** lpCoin.decimals).toString()
        ],
        type_arguments: [
            structToString(lpCoin.coinX.struct),
            structToString(lpCoin.coinY.struct),
            structToString(curve(curveType))
        ],
    })
        .then((res) => [
            res[0] as number / 10 ** lpCoin.coinX.decimals,
            res[1] as number / 10 ** lpCoin.coinY.decimals
        ])
        .catch((_) => [0, 0])
}

export const getReservesSize = async (
    client: AptosClient,
    coin1: Coin,
    coin2: Coin,
    curveType: CurveType,
): Promise<number[]> => {
    return client.view({
        function: `${moduleToString(routerModule)}::get_reserves_size`,
        arguments: [],
        type_arguments: [
            structToString(coin1.struct),
            structToString(coin2.struct),
            structToString(curve(curveType))
        ],
    })
        .then((res) => [
            res[0] as number / 10 ** coin1.decimals,
            res[1] as number / 10 ** coin2.decimals
        ])
        .catch((_) => [0, 0])
}

export const getCoin2Amount = async (
    client: AptosClient,
    coin1: Coin,
    coin2: Coin,
    curveType: CurveType,
    coin1Amount: number,
): Promise<number> => {
    const [coin1Reserve, coin2Reserve] = await getReservesSize(client, coin1, coin2, curveType);
    return coin1Amount / coin1Reserve * coin2Reserve;
}

export const getCoin1Amount = async (
    client: AptosClient,
    coin1: Coin,
    coin2: Coin,
    curveType: CurveType,
    coin2Amount: number,
): Promise<number> => {
    const [coin1Reserve, coin2Reserve] = await getReservesSize(client, coin1, coin2, curveType);
    return coin2Amount / coin2Reserve * coin1Reserve;
}