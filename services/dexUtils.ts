import {Coin} from "@/types/Coin";

export const getOutputAmount = async (inputAmount: number, _inputCoin: Coin, _outputCoin: Coin) => {
    return inputAmount * 2;
}

export const getInputAmount = async (outputAmount: number, _inputCoin: Coin, _outputCoin: Coin) => {
    return outputAmount / 2;
}