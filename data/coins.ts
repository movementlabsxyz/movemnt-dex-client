import {coinsModule} from "@/data/modules";

import {Coin} from "@/types/Coin";

export const MVMT: Coin = {
    name: "Movement",
    symbol: "MVMT",
    struct: {
        account_address: "0x1",
        module_name: "aptos_coin",
        struct_name: "AptosCoin",
    },
    imageURL: "/coinIcons/mvmt.png",
    decimals: 8
}

export const AVAX: Coin = {
    name: "Avalanche",
    symbol: "AVAX",
    struct: {
        ...coinsModule,
        struct_name: "AVAX",
    },
    imageURL: "/coinIcons/avax.png",
    decimals: 8
}

export const USDC: Coin = {
    name: "USD Coin",
    symbol: "USDC",
    struct: {
        ...coinsModule,
        struct_name: "USDC",
    },
    imageURL: "/coinIcons/usdc.png",
    decimals: 8
}

export const ETH: Coin = {
    name: "Ethereum",
    symbol: "ETH",
    struct: {
        ...coinsModule,
        struct_name: "ETH",
    },
    imageURL: "/coinIcons/eth.png",
    decimals: 8
}

export const BTC: Coin = {
    name: "Bitcoin",
    symbol: "BTC",
    struct: {
        ...coinsModule,
        struct_name: "BTC",
    },
    imageURL: "/coinIcons/btc.png",
    decimals: 8
}

const coins = [MVMT, AVAX, USDC, ETH, BTC];

export default coins;