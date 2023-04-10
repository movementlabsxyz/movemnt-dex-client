import React, {useState, useEffect} from 'react';

import {Button, Menu, MenuButton, MenuItem, MenuList, Image} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";

import {Coin} from "@/types/Coin";
import coins from "@/data/coins";

interface Props {
    coin: Coin | null;
    setCoin: (coin: Coin) => void;
    excludeSymbols?: string[];
}

const CoinSelect: React.FC<Props> = ({ coin, setCoin, excludeSymbols }) => {

    const [availableCoins, setAvailableCoins] = useState<Coin[]>([]);

    useEffect(() => {
        setAvailableCoins(coins.filter((coin) => !excludeSymbols?.includes(coin.symbol)));
    }, [excludeSymbols])

    return (
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                leftIcon={
                    coin ? (
                        <Image
                            boxSize={6}
                            alt={coin.name}
                            src={coin.imageURL}
                            rounded='full'
                        />
                    ) : undefined
                }
                w={60}
            >
                {coin ? coin.symbol : 'Select Coin'}
            </MenuButton>
            <MenuList>
                {
                    availableCoins.map(coin => (
                        <MenuItem
                            key={coin.name}
                            onClick={() => setCoin(coin)}
                            icon={
                                <Image
                                    boxSize={6}
                                    alt={coin.name}
                                    src={coin.imageURL}
                                    rounded='full'
                                />
                            }
                        >
                            {coin.symbol}
                        </MenuItem>
                    ))
                }
            </MenuList>
        </Menu>
    );
};

export default CoinSelect;
