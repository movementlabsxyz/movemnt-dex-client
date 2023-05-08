import axios from 'axios';
import {RPC_URL} from "@/data/rpcURL";

import {AccountKeys} from "@manahippo/aptos-wallet-adapter";
export const getMvmt = async (account: AccountKeys) => {
    if(!account.publicKey?.toString()) return;
    await axios({
        method: "post",
        url: RPC_URL + "/mint?puk_key=" + account.publicKey.toString(),
    });
}