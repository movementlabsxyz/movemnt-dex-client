import React from 'react';

import {Button as ChakraButton, ButtonProps} from '@chakra-ui/react';

const Button: React.FC<ButtonProps> = (buttonProps) => {
    return (
        <ChakraButton
            colorScheme="brand"
            color='black'
            {...buttonProps}
        />
    );
};

export default Button;
