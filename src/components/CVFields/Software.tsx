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
  StackItem,
  Stack,
} from "@chakra-ui/react";
import SoftwareUpload from "../DataUpload/SoftwareUpload";
import { IUserData } from "../../utils/types";
import { IoMdAdd } from "react-icons/io";

export default function Software({ userData }: IUserData): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box className="Software">
        <Heading
          align="center"
          fontWeight="medium"
          fontSize="18px"
          backgroundColor="rgb(247,247,247)"
          marginBottom="5px"
        >
          SOFTWARE
        </Heading>
        {userData.software.map((obj, index) => (
          <Stack key={index} spacing="10px">
            <StackItem>{obj.software}</StackItem>
          </Stack>
        ))}
        <IconButton
          aria-label="Add"
          onClick={onOpen}
          icon={<IoMdAdd />}
          isRound={true}
          marginLeft="40%"
          size="sm"
          variant="outline"
          marginTop="5px"
        />
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontWeight="medium" textAlign="center">
              ADD SOFTWARE SKILL
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <SoftwareUpload />
            </ModalBody>
            <ModalFooter />
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}
