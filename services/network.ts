import {RPC_URL} from "@/data/rpcURL";

export const getCorrectNetwork = (rpcURL: string | undefined): boolean => rpcURL === RPC_URL;
