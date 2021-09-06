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
import SkillsUpload from "../DataUpload/SkillsUpload";
import { IUserData } from "../../utils/types";
import { IoMdAdd } from "react-icons/io";
import { useContext } from "react";
import { printContext } from "../../App";
import { renderContext } from "../CV Structure/CVStructure";

export default function Skills({ userData }: IUserData): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const print = useContext(printContext);
  const setRender = useContext(renderContext);
  const HandleSetRender = () => setRender(new Date());
  return (
    <>
      <Box className="Skills">
        <Heading
          align="center"
          fontWeight="medium"
          fontSize="18px"
          backgroundColor="rgb(247,247,247)"
          marginBottom="5px"
        >
          SKILLS
        </Heading>
        {userData.skill.map((obj, index) => (
          <Stack key={index} spacing="10px">
            {" "}
            <StackItem>{obj.skill}</StackItem>{" "}
          </Stack>
        ))}
        {print !== "yes" && (
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
        )}
        <Modal
          isOpen={isOpen}
          onClose={() => {
            onClose();
            HandleSetRender();
          }}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontWeight="medium" textAlign="center">
              ADD SKILL
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <SkillsUpload />
            </ModalBody>
            <ModalFooter />
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}
