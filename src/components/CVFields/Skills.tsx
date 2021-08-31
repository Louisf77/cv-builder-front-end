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
import SkillsUpload from "../DataUpload/SkillsUpload";
import { IUserData } from "../../utils/types";
import { IoMdAdd } from "react-icons/io";

export default function Skills({ userData }: IUserData): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box className="Skills">
        <Heading align="center" fontSize="20px" backgroundColor="gray.200">SKILLS</Heading>
        {userData.skill.map((obj, index) => (
          <Box key={index}> {obj.skill} </Box>
        ))}
        <IconButton
          aria-label="Add"
          onClick={onOpen}
          icon={<IoMdAdd />}
          isRound={true}
        />
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Another Skill</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <SkillsUpload />
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
