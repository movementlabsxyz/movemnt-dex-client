import {getMvmt} from "@/services/mvmtFaucet";
import {useWallet} from "@manahippo/aptos-wallet-adapter";
import {useToast} from "@chakra-ui/react";
import {useAptos} from "@/contexts/AptosContext";


const useMvmtFaucet = () => {

    const { updateClient } = useAptos();

    const { account } = useWallet();

    const toast = useToast();

    const onFaucet = async () => {
        if(!account) return;
        await getMvmt(account)
            .then(() => {
                updateClient();
                toast({
                    title: "Success",
                    description: "You have received 1000 MVMT",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                })
            })
            .catch((err) => {
                toast({
                    title: "Error",
                    description: err.message,
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                })
            })
    }

    return { onFaucet }
}

export default useMvmtFaucet