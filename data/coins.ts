import {Coin} from "@/types/Coin";

export const MVMT: Coin = {
    name: "Movement",
    symbol: "MVMT",
    struct: {
        module_name: "Coin1",
        struct_name: "Coin",
        account_address: "0x1::Coin1::Coin",
    },
    imageURL: "/coinIcons/mvmt.png",
    decimals: 8
}

export const AVAX: Coin = {
    name: "Avalanche",
    symbol: "AVAX",
    struct: {
        module_name: "Coin1",
        struct_name: "Coin",
        account_address: "0x1::Coin1::Coin",
    },
    imageURL: "/coinIcons/avax.png",
    decimals: 8
}

export const USDC: Coin = {
    name: "USD Coin",
    symbol: "USDC",
    struct: {
        module_name: "Coin1",
        struct_name: "Coin",
        account_address: "0x1::Coin1::Coin",
    },
    imageURL: "/coinIcons/usdc.png",
    decimals: 8
}

export const ETH: Coin = {
    name: "Ethereum",
    symbol: "ETH",
    struct: {
        module_name: "Coin1",
        struct_name: "Coin",
        account_address: "0x1::Coin1::Coin",
    },
    imageURL: "/coinIcons/eth.png",
    decimals: 8
}

export const BTC: Coin = {
    name: "Bitcoin",
    symbol: "BTC",
    struct: {
        module_name: "Coin1",
        struct_name: "Coin",
        account_address: "0x1::Coin1::Coin",
    },
    imageURL: "/coinIcons/btc.png",
    decimals: 8
}

const coins = [MVMT, AVAX, USDC, ETH, BTC];

export default coins;