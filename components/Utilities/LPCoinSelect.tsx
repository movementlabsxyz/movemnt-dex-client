import React from 'react';

import {Button, Menu, MenuButton, MenuItem, MenuList, Image} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";

import {LPCoin} from "@/types/LPCoin";

interface Props {
    lpCoin: LPCoin | null;
    setLpCoin: (coin: LPCoin) => void;
    lpCoins: LPCoin[];
}

const LPCoinSelect: React.FC<Props> = ({ lpCoin, setLpCoin, lpCoins }) => {

    return (
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                leftIcon={
                    lpCoin ? (
                        <Image
                            boxSize={6}
                            alt={lpCoin.name}
                            src={lpCoin.imageURL}
                            rounded='full'
                        />
                    ) : undefined
                }
                w={80}
            >
                {lpCoin ? lpCoin.symbol : 'Select Coin'}
            </MenuButton>
            <MenuList>
                {
                    lpCoins.map(lpCoin => (
                        <MenuItem
                            key={lpCoin.name}
                            onClick={() => setLpCoin(lpCoin)}
                            icon={
                                <Image
                                    boxSize={6}
                                    alt={lpCoin.name}
                                    src={lpCoin.imageURL}
                                    rounded='full'
                                />
                            }
                        >
                            {lpCoin.symbol}
                        </MenuItem>
                    ))
                }
            </MenuList>
        </Menu>
    );
};

export default LPCoinSelect;
