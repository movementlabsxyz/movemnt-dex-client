import { dexModuleAddress, lpModuleAddress } from "@/data/moduleAddresses";

import { Module } from "@/types/Module";

export const scriptsModule: Module = {
    account_address: dexModuleAddress,
    module_name: "scripts"
}

export const routerModule: Module = {
    account_address: dexModuleAddress,
    module_name: "router"
}

export const curvesModule: Module = {
    account_address: dexModuleAddress,
    module_name: "curves"
}

export const lpModule: Module = {
    account_address: lpModuleAddress,
    module_name: "lp_coin"
}