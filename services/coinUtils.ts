import { AptosClient } from 'aptos';

import { Coin} from "@/types/Coin";
import {structToString} from "@/services/moveUtils";

export const getCoinBalance = async (client: AptosClient, coin: Coin, address: string) => (
    client.view({
        function: '0x1::coin::balance',
        type_arguments: [structToString(coin.struct)],
        arguments: [address],
    })
        .then(res => res[0] as number / 10 ** coin.decimals)
        .catch(() => 0)
)