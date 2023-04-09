import React from 'react';

import {Box, Container} from "@chakra-ui/react";
import Navbar from "@/components/Navbar";

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <Box>
            <Navbar />
            <Container>
                {children}
            </Container>
        </Box>
    );
};

export default Layout;
