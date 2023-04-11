import React from 'react';

import CoinAmountInput from "@/components/Utilities/CoinAmountInput";
import LPCoinSelect from "@/components/Utilities/LPCoinSelect";

import lpCoins from "@/data/lpCoins";

import {LPCoin} from "@/types/LPCoin";


interface Props {
    amount: number;
    setAmount: (amount: number) => void;
    lpCoin: LPCoin | null;
    setLpCoin: (coin: LPCoin) => void;
    label: string;
    isBalanceMax?: boolean;
}

const LPCoinInput: React.FC<Props> = ({ amount, setAmount, lpCoin, setLpCoin, label, isBalanceMax }) => {
    return (
        <CoinAmountInput
            coin={lpCoin}
            amount={amount}
            setAmount={setAmount}
            label={label}
            rightAddon={
                <LPCoinSelect
                    lpCoin={lpCoin}
                    setLpCoin={setLpCoin}
                    lpCoins={lpCoins.filter(coin => coin.symbol !== lpCoin?.symbol)}
                />
            }
            isBalanceMax={isBalanceMax}
        />
    );
};

export default LPCoinInput;
