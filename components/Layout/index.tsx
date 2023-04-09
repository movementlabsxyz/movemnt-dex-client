import React from 'react';

import {Box, Container} from "@chakra-ui/react";

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <Box>
            <Container>
                {children}
            </Container>
        </Box>
    );
};

export default Layout;
