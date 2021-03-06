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
  useDisclosure,
  IconButton,
  StackDivider,
} from "@chakra-ui/react";
import WorkUpload from "../DataUpload/WorkUpload";
import { IUserData } from "../../utils/types";
import { IoMdAdd } from "react-icons/io";
import { timeConverter } from "../../utils/timeConverter";
import { useContext } from "react";
import { printContext } from "../../App";
import { renderContext } from "../CV Structure/CVStructure";

export default function Work({ userData }: IUserData): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const print = useContext(printContext);
  const setRender = useContext(renderContext);
  const HandleSetRender = () => setRender(new Date());
  return (
    <>
      <Box className="work">
        <Heading
          align="center"
          fontWeight="medium"
          fontSize="20px"
          marginBottom="5px"
        >
          EXPERIENCE
        </Heading>
        {userData.work.map((obj, index) => (
          <Stack key={index} spacing="10px">
            <List>
              <ListItem fontWeight="bold" fontSize="11px">
                {obj.role}
              </ListItem>
              <ListItem fontStyle="italic" fontSize="11px">
                {obj.company_name} | {timeConverter(obj.start_date)} -{" "}
                {timeConverter(obj.end_date)}
              </ListItem>
              <ListItem>{obj.responsibilities}</ListItem>
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
            size="sm"
            marginLeft="45%"
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
            <ModalHeader fontWeight="medium" textAlign="center">
              ADD WORK EXPERIENCE
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <WorkUpload />
            </ModalBody>
            <ModalFooter />
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}
