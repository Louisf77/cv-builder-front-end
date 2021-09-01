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
  Stack,
  StackItem,
} from "@chakra-ui/react";
import InterestsUpload from "../DataUpload/InterestsUpload";
import { IUserData } from "../../utils/types";
import { IoMdAdd } from "react-icons/io";

export default function Interests({ userData }: IUserData): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box className="interests">
        <Heading align="center" fontWeight="medium"fontSize="18px" marginBottom="5px">INTERESTS</Heading>
        {userData.interest.map((obj, index) => (
          <Stack key={index} spacing="5px"><StackItem>{obj.interest}</StackItem></Stack>
        ))}
        <IconButton
          aria-label="Add"
          onClick={onOpen}
          icon={<IoMdAdd />}
          isRound={true}
          marginLeft="40%"
          size="sm"
          variant="outline"
        />
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign="center" fontWeight="medium">ADD INTEREST</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <InterestsUpload />
            </ModalBody>
            <ModalFooter />
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}
