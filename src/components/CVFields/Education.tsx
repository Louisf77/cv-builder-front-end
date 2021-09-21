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
  useDisclosure,
  IconButton,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import EducationUpload from "../DataUpload/EducationUpload";
import { IUserData } from "../../utils/types";
import { IoMdAdd } from "react-icons/io";
import { timeConverter } from "../../utils/timeConverter";
import { useContext } from "react";
import { printContext } from "../../App";
import { renderContext } from "../CV Structure/CVStructure";

export default function Education({ userData }: IUserData): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const setRender = useContext(renderContext);
  const HandleSetRender = () => setRender(new Date());
  const print = useContext(printContext);
  return (
    <>
      <Box className="Education">
        <Heading
          align="center"
          fontSize="20px"
          fontWeight="medium"
          marginBottom="5px"
        >
          EDUCATION
        </Heading>
        {userData.education.map((obj, index) => (
          <Stack key={index} spacing="10px">
            <List>
              <ListItem fontSize="11px" fontWeight="bold">
                {obj.subject}
              </ListItem>
              <ListItem>
                {obj.institution_name} | {timeConverter(obj.start_date)} -{" "}
                {timeConverter(obj.end_date)}
              </ListItem>
              <ListItem>
                Qualification Level: {obj.qualification_level}
              </ListItem>
              <ListItem>Grade(s) Acheived: {obj.grade}</ListItem>
            </List>
            <StackDivider borderColor="gray.200" />
          </Stack>
        ))}
        {print !== true && (
          <IconButton
            aria-label="Add"
            onClick={onOpen}
            icon={<IoMdAdd />}
            isRound={true}
            marginLeft="45%"
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
              ADD EDUCATION
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <EducationUpload />
            </ModalBody>
            <ModalFooter />
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}
