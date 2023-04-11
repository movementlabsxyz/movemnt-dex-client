import React from 'react';

import {Tab, TabList, Tabs, TabPanel, TabPanels} from "@chakra-ui/react";

import AddLiquidity from "@/components/AddLiquidity";
import Card from "@/components/Utilities/Card";
import RemoveLiquidity from "@/components/RemoveLiquidity";
import RegisterPool from "@/components/RegisterPool";

const pools = [
    {
        label: "Add Liquidity",
        component: <AddLiquidity />
    },
    {
        label: "Remove Liquidity",
        component: <RemoveLiquidity />
    },
    {
        label: "Register Pool",
        component: <RegisterPool />
    }
]

const Pools = () => {
    return (
        <Card>
            <Tabs
                isFitted
                variant='line'
                colorScheme='blue'
                size='lg'
            >
                <TabList>
                    {
                        pools.map((pool) => (
                            <Tab
                                key={pool.label}
                            >
                                {pool.label}
                            </Tab>
                        ))
                    }
                </TabList>

                <TabPanels>
                    {
                        pools.map((pool) => (
                            <TabPanel
                                key={pool.label}
                            >
                                {pool.component}
                            </TabPanel>
                        ))
                    }
                </TabPanels>
            </Tabs>
        </Card>
    );
};

export default Pools;
