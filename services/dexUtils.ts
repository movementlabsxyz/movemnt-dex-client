import {Coin} from "@/types/Coin";

export const getOutputAmount = async (inputAmount: number, _inputCoin: Coin, _outputCoin: Coin) => {
    return inputAmount * 2;
}

export const getInputAmount = async (outputAmount: number, _inputCoin: Coin, _outputCoin: Coin) => {
    return outputAmount / 2;
}

export const getCoin2Amount = async (coin1Amount: number, _coin1: Coin, _coin2: Coin) => {
    return coin1Amount * 2;
}

export const getCoin1Amount = async (coin2Amount: number, _coin1: Coin, _coin2: Coin) => {
    return coin2Amount / 2;
}