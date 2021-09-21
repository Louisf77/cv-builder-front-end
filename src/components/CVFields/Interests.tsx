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
import { useContext } from "react";
import { printContext } from "../../App";
import { renderContext } from "../CV Structure/CVStructure";

export default function Interests({ userData }: IUserData): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const setRender = useContext(renderContext);
  const HandleSetRender = () => setRender(new Date());
  const print = useContext(printContext);
  return (
    <>
      <Box className="interests">
        <Heading
          align="center"
          fontWeight="medium"
          fontSize="18px"
          marginBottom="5px"
          backgroundColor="rgb(247,247,247)"
        >
          INTERESTS
        </Heading>
        {userData.interest.map((obj, index) => (
          <Stack key={index} spacing="5px">
            <StackItem>{obj.interest}</StackItem>
          </Stack>
        ))}
        {print !== true && (
          <IconButton
            aria-label="Add"
            onClick={onOpen}
            icon={<IoMdAdd />}
            isRound={true}
            marginLeft="40%"
            size="sm"
            variant="outline"
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
            <ModalHeader textAlign="center" fontWeight="medium">
              ADD INTEREST
            </ModalHeader>
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
