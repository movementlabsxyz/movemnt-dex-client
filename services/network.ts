import {RPC_URL} from "@/data/rpcURL";

export const getCorrectNetwork = (rpcURL: string | null): boolean => rpcURL === RPC_URL;
