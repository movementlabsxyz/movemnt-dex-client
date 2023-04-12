import React from 'react';

import {Flex, HStack, Text} from "@chakra-ui/react";

import NavLinks from "@/components/Navbar/NavLinks";
import AccountSection from "@/components/Navbar/AccountSection";

export const navbarHeight = 20;

const Navbar = () => {
    return (
        <Flex
            justifyContent='space-between'
            alignItems='center'
            height={navbarHeight}
            px={8}
        >
            <HStack
                spacing={8}
            >
                <Text
                    fontSize='2xl'
                    fontWeight='bold'
                >
                    Movement DEX
                </Text>
                <NavLinks />
            </HStack>
            <AccountSection />
        </Flex>
    );
};

export default Navbar;
