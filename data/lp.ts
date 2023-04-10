import {structToString} from "@/services/moveUtils";

import {lpModule} from "@/data/modules";
import {curve} from "@/data/curves";

import {Coin} from "@/types/Coin";
import {CurveType} from "@/types/CurveType";
import {Struct} from "@/types/Struct";

export const lpCoin = (coinX: Coin, coinY: Coin, curveType: CurveType): Struct => ({
    ...lpModule,
    struct_name: `LP<${structToString(coinX.struct)}, ${structToString(coinY.struct)}, ${structToString(curve(curveType))}>`
})