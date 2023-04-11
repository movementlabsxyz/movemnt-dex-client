import {moduleToString, structToString} from "@/services/moveUtils";

import {scriptsModule} from "@/data/modules";
import {curve} from "@/data/curves";

import {Coin} from "@/types/Coin";
import {CurveType} from "@/types/CurveType";

import { TransactionPayload } from "aptos/src/generated";

export const buildSwapPayload = (
    coinX: Coin,
    coinY: Coin,
    curveType: CurveType,
    swapAmount: number,
    minAmountOut: number
): TransactionPayload => ({
    type: 'entry_function_payload',
    function: `${moduleToString(scriptsModule)}::swap`,
    arguments: [
        Math.round(swapAmount),
        Math.round(minAmountOut),
    ],
    type_arguments: [
        structToString(coinX.struct),
        structToString(coinY.struct),
        structToString(curve(curveType)),
    ]
})

export const buildAddLiquidityPayload = (
    coinX: Coin,
    coinY: Coin,
    curveType: CurveType,
    amountX: number,
    minAmountX: number,
    amountY: number,
    minAmountY: number,
): TransactionPayload => ({
    type: 'entry_function_payload',
    function: `${moduleToString(scriptsModule)}::add_liquidity`,
    arguments: [
        amountX,
        minAmountX,
        amountY,
        minAmountY,
    ],
    type_arguments: [
        structToString(coinX.struct),
        structToString(coinY.struct),
        structToString(curve(curveType))
    ],
})

export const buildRemoveLiquidityPayload = (
    coinX: Coin,
    coinY: Coin,
    curveType: CurveType,
    lpAmount: number,
    minAmountX: number,
    minAmountY: number,
): TransactionPayload => ({
    type: 'entry_function_payload',
    function: `${moduleToString(scriptsModule)}::remove_liquidity`,
    arguments: [
        lpAmount,
        minAmountX,
        minAmountY,
    ],
    type_arguments: [
        structToString(coinX.struct),
        structToString(coinY.struct),
        structToString(curve(curveType))
    ],
})

export const buildRegisterPoolPayload = (
    coinX: Coin,
    coinY: Coin,
    curveType: CurveType,
): TransactionPayload => ({
    type: 'entry_function_payload',
    function: `${moduleToString(scriptsModule)}::register_pool`,
    arguments: [],
    type_arguments: [
        structToString(coinX.struct),
        structToString(coinY.struct),
        structToString(curve(curveType))
    ]
})