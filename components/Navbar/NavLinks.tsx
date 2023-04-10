import React from 'react';

import {HStack} from "@chakra-ui/react";

import NavLink from "@/components/Navbar/NavLink";

import navLinks from "@/data/navLinks";

const NavLinks = () => {
    return (
        <HStack>
            {
                navLinks.map(navLink => (
                    <NavLink
                        key={navLink.name}
                        link={navLink}
                    />
                ))
            }
        </HStack>
    );
};

export default NavLinks;
