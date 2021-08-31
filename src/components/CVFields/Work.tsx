import {
  Heading,
  Box,
  Stack,
  ListItem,
  List,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  IconButton,
  StackDivider
} from "@chakra-ui/react";
import WorkUpload from "../DataUpload/WorkUpload";
import { IUserData } from "../../utils/types";
import { IoMdAdd } from "react-icons/io";
import { timeConverter } from "../../utils/timeConverter";

export default function Work({ userData }: IUserData): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box className="work">
        <Heading align="center" fontSize="20px">EXPERIENCE</Heading>
        {userData.work.map((obj, index) => (
          <Stack key={index}
          spacing="10px"
          >
            <List>
              <ListItem fontWeight="bold" fontSize="11px">{obj.role}</ListItem>
              <ListItem fontStyle="italic" fontSize="11px">{obj.company_name} | {timeConverter(obj.start_date)} - {timeConverter(obj.end_date)}</ListItem>
              <ListItem>{obj.responsibilities}</ListItem>
            </List>
            <StackDivider borderColor="gray.200" />
          </Stack>
        ))}
        <IconButton
          aria-label="Add"
          onClick={onOpen}
          icon={<IoMdAdd />}
          isRound={true}
          size="sm"
          marginLeft="45%"
        />
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Your Work Experience</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <WorkUpload />
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
