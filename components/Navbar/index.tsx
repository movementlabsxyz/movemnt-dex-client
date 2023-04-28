import React from 'react';

import {Flex, Heading, HStack, Image} from "@chakra-ui/react";

import NavLinks from "@/components/Navbar/NavLinks";
import AccountSection from "@/components/Navbar/AccountSection";
import Link from "next/link";

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
                <Link
                    href='/'
                >
                    <HStack
                        spacing={4}
                        cursor='pointer'

                    >
                        <Image
                            alt='Movement DEX'
                            src='/coinIcons/mvmt.png'
                            boxSize={8}
                            rounded='full'
                        />
                        <Heading
                            fontSize='2xl'
                            fontWeight='bold'
                        >
                            Movement DEX
                        </Heading>
                    </HStack>
                </Link>
                <NavLinks />
            </HStack>
            <AccountSection />
        </Flex>
    );
};

export default Navbar;
