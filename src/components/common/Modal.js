import React from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

export default function ConfirmationModal({ isOpen, onClose }) {
  return (
    <>
      <Modal isOpen={isOpen} size="md" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Thank you for reaching out!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>
              Please allow 2-3 business days for a response to your request. I
              appreciate your patience and interest in working with me.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
