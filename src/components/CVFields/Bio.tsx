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
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import BioUpload from "../DataUpload/BioUpload";
import { IUserData } from "../../utils/types";
import { IoMdAdd } from "react-icons/io";

export default function Bio({ userData }: IUserData): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box className="Bio">
        <Heading align="center" fontWeight="medium" fontSize="18px" 
            backgroundColor="rgb(247,247,247)"
            marginBottom="5px">
          ABOUT ME
        </Heading>
        {userData.bio.map((obj, index) => (
          <Box key={index}>{obj.bio}</Box>
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
            <ModalHeader textAlign="center" fontWeight="medium">
              ADD A BIT ABOUT YOURSELF
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <BioUpload />
            </ModalBody>
            <ModalFooter />
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}
