import React from 'react';

import {NavLink as NavLinkType} from "@/types/NavLink";
import {Button} from "@chakra-ui/react";
import Link from "next/link";

interface Props {
    link: NavLinkType
}

const NavLink: React.FC<Props> = ({ link }) => {
    return (
        <Link
            href={link.path}
            passHref
        >
            <Button
                variant='ghost'
                leftIcon={<link.icon />}
            >
                {link.name}
            </Button>
        </Link>
    );
};

export default NavLink;
