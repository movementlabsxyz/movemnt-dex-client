import React from 'react';

import {NavLink as NavLinkType} from "@/types/NavLink";
import {Button} from "@chakra-ui/react";
import Link from "next/link";
import {useRouter} from "next/router";

interface Props {
    link: NavLinkType
}

const NavLink: React.FC<Props> = ({ link }) => {

    const router = useRouter();

    const isActive = router.asPath === link.path;

    return (
        <Link
            href={link.path}
            passHref
        >
            <Button
                variant={isActive ? 'solid' : 'ghost'}
                leftIcon={<link.icon />}
                colorScheme={isActive ? 'brand' : undefined}
            >
                {link.name}
            </Button>
        </Link>
    );
};

export default NavLink;
