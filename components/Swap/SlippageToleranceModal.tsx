import React from 'react';

import {
    Modal,
    ModalHeader,
    ModalOverlay,
    ModalBody,
    ModalFooter,
    ModalCloseButton,
    ModalContent,
    IconButton,
    Tab,
    Tabs,
    TabList, VStack
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";

import { MdSettings } from "react-icons/md";

const slippageOptions = [
    0.005,
    0.01,
    0.015
]

interface Props {
    slippageTolerance: number;
    setSlippageTolerance: (slippageTolerance: number) => void;
}

const SlippageToleranceModal: React.FC<Props> = ({ slippageTolerance, setSlippageTolerance }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Slippage Tolerance</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack>
                            <Tabs
                                variant='soft-rounded'
                                colorScheme='blackAlpha'
                                index={slippageOptions.indexOf(slippageTolerance)}
                                onChange={(index) => setSlippageTolerance(slippageOptions[index])}
                            >
                                <TabList>
                                    {
                                        slippageOptions.map((option) => (
                                            <Tab
                                                key={option}
                                            >
                                                {option * 100}%
                                            </Tab>
                                        ))
                                    }
                                </TabList>
                            </Tabs>
                        </VStack>
                    </ModalBody>
                    <ModalFooter />
                </ModalContent>
            </Modal>
            <IconButton
                aria-label="Slippage Tolerance Modal"
                icon={<MdSettings />}
                onClick={onOpen}
                p={0}
            />
        </>
    );
};

export default SlippageToleranceModal;
