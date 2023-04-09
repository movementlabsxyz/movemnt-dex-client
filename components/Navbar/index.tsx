import React from 'react';
import {Flex, Text} from "@chakra-ui/react";
import ConnectWallet from "@/components/Navbar/ConnectWallet";

export const navbarHeight = 20;

const Navbar = () => {
    return (
        <Flex
            justifyContent='space-between'
            alignItems='center'
            height={navbarHeight}
            px={8}
        >
            <Text
                fontSize='2xl'
                fontWeight='bold'
            >
                Movemnt DEX
            </Text>
            <ConnectWallet />
        </Flex>
    );
};

export default Navbar;
