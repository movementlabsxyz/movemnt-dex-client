import { AptosClient } from "movement-sdk";

import {RPC_URL} from "@/data/rpcURL";

export const getAptosClient = () => new AptosClient(RPC_URL);