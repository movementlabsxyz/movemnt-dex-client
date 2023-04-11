
import { TransactionPayload } from "aptos/src/generated";

import {Coin} from "@/types/Coin";
import {moduleToString, structToString} from "@/services/moveUtils";
import {coinsModule} from "@/data/modules";

export const buildFaucetPayload = (coin: Coin, amount: number): TransactionPayload => ({
    type: 'entry_function_payload',
    function: `${moduleToString(coinsModule)}::faucet`,
    arguments: [
        Math.round(amount * 10 ** coin.decimals),
    ],
    type_arguments: [
        structToString(coin.struct)
    ]
})