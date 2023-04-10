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
) => {
    await client.view({
        function: `${moduleToString(routerModule)}::get_amount_out`,
        arguments: [inputAmount],
        type_arguments: [
            structToString(inputCoin.struct),
            structToString(outputCoin.struct),
            structToString(curve(curveType))
        ]
    })
        .then((res) => res[0])
        .catch((_) => 0)
    return inputAmount * 2;
}

export const getInputAmount = async (
    client: AptosClient,
    outputAmount: number,
    inputCoin: Coin,
    outputCoin: Coin,
    curveType: CurveType
) => {
    await client.view({
        function: `${moduleToString(routerModule)}::get_amount_out`,
        arguments: [outputAmount],
        type_arguments: [
            structToString(inputCoin.struct),
            structToString(outputCoin.struct),
            structToString(curve(curveType))
        ]
    })
        .then((res) => res[0])
        .catch((_) => 0)
    return outputAmount / 2;
}