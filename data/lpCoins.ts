import {LPCoin} from "@/types/LPCoin";

import {lpCoin} from "@/data/lp";
import {AVAX, MVMT, USDC} from "@/data/coins";

const AVAX_MVMT: LPCoin = {
    name: "AVAX/MVMT LP",
    symbol: "AVAX/MVMT",
    decimals: 6,
    struct: lpCoin(AVAX, MVMT, "Uncorrelated"),
    imageURL: '/coinIcons/lp.png',
    coinX: AVAX,
    coinY: MVMT
}

const MVMT_USDC: LPCoin = {
    name: "MVMT/USDC LP",
    symbol: "MVMT/USDC",
    decimals: 6,
    struct: lpCoin(MVMT, USDC, "Uncorrelated"),
    imageURL: '/coinIcons/lp.png',
    coinX: MVMT,
    coinY: USDC
}



const lpCoins = [
    AVAX_MVMT,
    MVMT_USDC,
]

export default lpCoins