import {coinsModuleAddress, dexModuleAddress, lpModuleAddress} from "@/data/moduleAddresses";

import { Module } from "@/types/Module";

export const scriptsModule: Module = {
    account_address: dexModuleAddress,
    module_name: "scripts_v2"
}

export const routerModule: Module = {
    account_address: dexModuleAddress,
    module_name: "router_v2"
}

export const curvesModule: Module = {
    account_address: dexModuleAddress,
    module_name: "curves"
}

export const lpModule: Module = {
    account_address: lpModuleAddress,
    module_name: "lp_coin"
}

export const coinsModule: Module = {
    account_address: coinsModuleAddress,
    module_name: "coins"
}