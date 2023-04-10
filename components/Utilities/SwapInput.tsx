import React from 'react';

import CoinAmountInput from "@/components/Utilities/CoinAmountInput";
import CoinSelect from "@/components/Utilities/CoinSelect";

import {Coin} from "@/types/Coin";

interface Props {
    amount: number;
    setAmount: (amount: number) => void;
    coin: Coin | null;
    setCoin: (coin: Coin) => void;
    label: string;
    excludeSymbols?: string[];
}

const SwapInput: React.FC<Props> = ({ amount, setAmount, coin, setCoin, label, excludeSymbols }) => {
    return (
        <CoinAmountInput
            decimals={coin ? coin.decimals : 0}
            amount={amount}
            setAmount={setAmount}
            label={label}
            rightAddon={
                <CoinSelect
                    coin={coin}
                    setCoin={setCoin}
                    excludeSymbols={excludeSymbols}
                />
            }
        />
    );
};

export default SwapInput;
