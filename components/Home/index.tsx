import React from 'react';

import {useWallet} from "@manahippo/aptos-wallet-adapter";

import {Text} from "@chakra-ui/react";

const Home = () => {

    const { network } = useWallet();

    return (
        <Text>
            {network?.api}
        </Text>
    );
};

export default Home;
