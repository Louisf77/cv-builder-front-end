import {
  Heading,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  IconButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import InterestsUpload from "../DataUpload/InterestsUpload";
import { IUserData } from "../../utils/types";
import { IoMdAdd } from "react-icons/io";

export default function Interests({ userData }: IUserData): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box className="interests">
        <Heading align="center" fontSize="20px">INTERESTS</Heading>
        {userData.interest.map((obj, index) => (
          <Box key={index}>{obj.interest}</Box>
        ))}
        <IconButton
          aria-label="Add"
          onClick={onOpen}
          icon={<IoMdAdd />}
          isRound={true}
          alignSelf="center"
        />
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Another Interest</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <InterestsUpload />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}
