import {Coin} from "@/types/Coin";

import {AptosClient} from "aptos";
import {moduleToString, structToString} from "@/services/moveUtils";
import {routerModule} from "@/data/modules";
import {CurveType} from "@/types/CurveType";
import {curve} from "@/data/curves";

export const getOutputAmount = async (
    client: AptosClient,
    inputAmount: number,
    inputCoin: Coin,
    outputCoin: Coin,
    curveType: CurveType
): Promise<number> => {
    return client.view({
        function: `${moduleToString(routerModule)}::get_amount_out`,
        arguments: [(inputAmount * 10 ** inputCoin.decimals).toString()],
        type_arguments: [
            structToString(inputCoin.struct),
            structToString(outputCoin.struct),
            structToString(curve(curveType))
        ]
    })
        .then((res) => res[0] as number / 10 ** outputCoin.decimals)
        .catch((_) => 0)
}

export const getInputAmount = async (
    client: AptosClient,
    outputAmount: number,
    inputCoin: Coin,
    outputCoin: Coin,
    curveType: CurveType
): Promise<number> => {
    return client.view({
        function: `${moduleToString(routerModule)}::get_amount_in`,
        arguments: [(outputAmount * 10 ** outputCoin.decimals).toString()],
        type_arguments: [
            structToString(inputCoin.struct),
            structToString(outputCoin.struct),
            structToString(curve(curveType))
        ]
    })
        .then((res) => res[0] as number / 10 ** inputCoin.decimals)
        .catch((_) => 0)
}