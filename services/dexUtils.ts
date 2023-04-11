import {Coin} from "@/types/Coin";
import {AptosClient} from "aptos";
import {dexModuleAddress} from "@/data/moduleAddresses";
import {structToString} from "@/services/moveUtils";
import {CurveType} from "@/types/CurveType";
import {curve} from "@/data/curves";

export const isSorted = async (client: AptosClient, coinX: Coin, coinY: Coin): Promise<boolean> => {
    return client.view({
        function: `${dexModuleAddress}::coin_helper::is_sorted`,
        arguments: [],
        type_arguments: [
            structToString(coinX.struct),
            structToString(coinY.struct)
        ]
    })
        .then((res) => res[0] as boolean)
        .catch((_) => false);
}

export const sortCoins = async (client: AptosClient, coinX: Coin, coinY: Coin): Promise<Coin[]> => {
    const isCoinsSorted = await isSorted(client, coinX, coinY);
    return isCoinsSorted ? [coinX, coinY] : [coinY, coinX];
}

export const isSwapExists = async (client: AptosClient, coinX: Coin, coinY: Coin, curveType: CurveType): Promise<boolean> => {
    return client.view({
        function: `${dexModuleAddress}::router_v2::is_swap_exists`,
        arguments: [],
        type_arguments: [
            structToString(coinX.struct),
            structToString(coinY.struct),
            structToString(curve(curveType))
        ]
    })
        .then((res) => res[0] as boolean)
        .catch((_) => false);
}

