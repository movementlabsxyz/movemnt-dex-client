import React from 'react';

import {Card as ChakraCard, useColorModeValue} from "@chakra-ui/react";

interface Props {
    children: React.ReactNode
}

const Card: React.FC<Props> = ({ children }) => {
    return (
        <ChakraCard
            bg={useColorModeValue('white', 'whiteAlpha.50')}
            p={4}
            shadow='xl'
        >
            {children}
        </ChakraCard>
    );
};

export default Card;
