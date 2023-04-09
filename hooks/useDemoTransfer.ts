import { useState } from 'react'
import useSubmitTransaction from "@/hooks/useSubmitTransaction";

const useDemoTransfer = () => {

    const { submitTransaction } = useSubmitTransaction();

    const [transferAmount, setTransferAmount] = useState<number>(0);
    const [transferAddress, setTransferAddress] = useState<string>('');

    const onSubmit = async () => {
        await submitTransaction({
            type: 'entry_function_payload',
            function: '0x1::coin::transfer',
            arguments: [
                transferAddress,
                transferAmount * 10 ** 8
            ],
            type_arguments: [
                "0x1::aptos_coin::AptosCoin"
            ]
        }, {
            title: "Send MVMT Success",
            description: `You have successfully sent ${transferAmount} MVMT to ${transferAddress}`
        });
    }

    return {
        transferAmount,
        setTransferAmount,
        transferAddress,
        setTransferAddress,
        onSubmit
    }
}

export default useDemoTransfer;