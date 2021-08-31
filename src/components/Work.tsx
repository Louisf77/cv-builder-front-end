import {
  Heading,
  Box,
  List,
  ListItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import WorkUpload from "./DataUpload/WorkUpload";
import { IWrk } from "../utils/types";

export default function Work({userData}: IWrk): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box className="work">
        <Heading>Experience</Heading>
        {userData.work.map((obj, index) => (
          <Box key={index}>
            <List>
              <ListItem>{obj.company_name}</ListItem>
              <ListItem>
                {obj.start_date}-{obj.end_date}
              </ListItem>
              <ListItem>{obj.role}</ListItem>
              <ListItem>{obj.responsibilities}</ListItem>
            </List>
          </Box>
        ))}
        <Button onClick={onOpen}>Add Experience</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Your Work Experience</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <WorkUpload/>
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
