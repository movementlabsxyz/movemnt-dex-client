import React from 'react';

import { Card as ChakraCard } from "@chakra-ui/react";

interface Props {
    children: React.ReactNode
}

const Card: React.FC<Props> = ({ children }) => {
    return (
        <ChakraCard
            bg='white'
            p={4}
        >
            {children}
        </ChakraCard>
    );
};

export default Card;
