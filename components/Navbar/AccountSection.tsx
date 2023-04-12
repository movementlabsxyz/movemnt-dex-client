import React from 'react';

import {HStack} from "@chakra-ui/react";

import MvmtFaucet from "@/components/Navbar/MvmtFaucet";
import ConnectWallet from "@/components/Navbar/ConnectWallet";

const RightSection = () => {

    return (
        <HStack
            spacing={4}
        >
            <MvmtFaucet />
            <ConnectWallet />
        </HStack>
    );
};

export default RightSection;
