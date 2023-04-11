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
    coins: Coin[];
    isBalanceMax?: boolean;
}

const CoinInput: React.FC<Props> = ({ amount, setAmount, coin, setCoin, label, coins, isBalanceMax }) => {
    return (
        <CoinAmountInput
            coin={coin}
            amount={amount}
            setAmount={setAmount}
            label={label}
            rightAddon={
                <CoinSelect
                    coin={coin}
                    setCoin={setCoin}
                    coins={coins}
                />
            }
            isBalanceMax={isBalanceMax}
        />
    );
};

export default CoinInput;
