import React from 'react';

import {HStack} from "@chakra-ui/react";

import ConnectWallet from "@/components/Navbar/ConnectWallet";
import ColorModeToggle from "@/components/Navbar/ColorModeToggle";
import MvmtFaucet from "@/components/Navbar/MvmtFaucet";

const RightSection = () => {

    return (
        <HStack
            spacing={4}
        >
            <MvmtFaucet />
            <ConnectWallet />
            <ColorModeToggle />
        </HStack>
    );
};

export default RightSection;
