import {Coin} from "@/types/Coin";
import {Module} from "@/types/Module";
import {coinsModuleAddress} from "@/data/moduleAddresses";

const testCoinModule: Module = {
    account_address: coinsModuleAddress,
    module_name: "coins",
}

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
        ...testCoinModule,
        struct_name: "AVAX",
    },
    imageURL: "/coinIcons/avax.png",
    decimals: 8
}

export const USDC: Coin = {
    name: "USD Coin",
    symbol: "USDC",
    struct: {
        ...testCoinModule,
        struct_name: "USDC",
    },
    imageURL: "/coinIcons/usdc.png",
    decimals: 8
}

export const ETH: Coin = {
    name: "Ethereum",
    symbol: "ETH",
    struct: {
        ...testCoinModule,
        struct_name: "ETH",
    },
    imageURL: "/coinIcons/eth.png",
    decimals: 8
}

export const BTC: Coin = {
    name: "Bitcoin",
    symbol: "BTC",
    struct: {
        ...testCoinModule,
        struct_name: "BTC",
    },
    imageURL: "/coinIcons/btc.png",
    decimals: 8
}

const coins = [MVMT, AVAX, USDC, ETH, BTC];

export default coins;