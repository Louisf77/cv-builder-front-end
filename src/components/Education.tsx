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
import EducationUpload from "./DataUpload/EducationUpload";
import { IEd } from "../utils/types";

export default function Education({ userData, userID }: IEd): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box className="Education">
        <Heading>Education</Heading>
        {userData.eduction.map((obj, index) => (
          <Box key={index}>
            <List>
              <ListItem>
                {obj.institution_name} {obj.start_date}-{obj.end_date}
              </ListItem>
              <ListItem>{obj.qualification_level}</ListItem>
              <ListItem>{obj.subject}</ListItem>
              <ListItem>{obj.grade}</ListItem>
            </List>
          </Box>
        ))}
        <Button onClick={onOpen}>Add Education</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <EducationUpload userID={userID} />
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
