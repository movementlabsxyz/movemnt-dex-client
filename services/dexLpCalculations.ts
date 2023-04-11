import {AptosClient} from "aptos";

import {moduleToString, structToString} from "@/services/moveUtils";

import {routerModule} from "@/data/modules";
import {curve} from "@/data/curves";

import {Coin} from "@/types/Coin";
import {CurveType} from "@/types/CurveType";

export const getOutputAmountsForLpAmount = async (
    client: AptosClient,
    coin1: Coin,
    coin2: Coin,
    curveType: CurveType,
    lpAmount: number,
): Promise<number[]> => {
    client.view({
        function: `${moduleToString(routerModule)}::get_reserves_for_lp_coins`,
        arguments: [lpAmount],
        type_arguments: [
            structToString(coin1.struct),
            structToString(coin2.struct),
            structToString(curve(curveType))
        ],
    })
        .then((res) => [res[0], res[1]])
        .catch((_) => [0, 0])
    return [0, 0];
}

export const getCoin2Amount = async (
    client: AptosClient,
    coin1: Coin,
    coin2: Coin,
    curveType: CurveType,
    coin1Amount: number,
): Promise<number> => {
    return client.view({
        function: `${moduleToString(routerModule)}::get_reserves_size`,
        arguments: [],
        type_arguments: [
            structToString(coin1.struct),
            structToString(coin2.struct),
            structToString(curve(curveType))
        ],
    })
        .then((res) => (
            coin1Amount / (res[0] as number / 10 ** coin1.decimals) * (res[1] as number / 10 ** coin2.decimals))
        )
        .catch((_) => 0)
}

export const getCoin1Amount = async (
    client: AptosClient,
    coin1: Coin,
    coin2: Coin,
    curveType: CurveType,
    coin2Amount: number,
): Promise<number> => {
    return client.view({
        function: `${moduleToString(routerModule)}::get_reserves_size`,
        arguments: [],
        type_arguments: [
            structToString(coin2.struct),
            structToString(coin1.struct),
            structToString(curve(curveType))
        ],
    })
        .then((res) => (
            coin2Amount / (res[0] as number / 10 ** coin2.decimals) * (res[1] as number / 10 ** coin1.decimals))
        )
        .catch((_) => 0)
}