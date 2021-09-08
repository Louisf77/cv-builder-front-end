// eslint-disable-next-line no-use-before-define
import React, { useContext } from "react";
import {
  Box,
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import ReactToPdf from "react-to-pdf";
import { BiShareAlt } from "react-icons/bi";
import { useAuth0 } from "@auth0/auth0-react";
import CVLayoutForPrint from "./CVStructureForPrint";
import { printContext } from "../../App";
import { setPrintContext } from "../../App";

const ref = React.createRef();
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Download() {
  const { user } = useAuth0();
  const print = useContext(printContext);
  const setPrint = useContext(setPrintContext);
  const handleSetPrint = () => setPrint("yes");
  const handleSetPrintNo = () => setPrint("no");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        onClick={() => {
          onOpen();
          handleSetPrint();
        }}
        aria-label="share"
        icon={<BiShareAlt />}
      ></IconButton>
      {print === "yes" && (
        <Box
          ref={ref}
          className="pdf container"
          width="fit-content"
          margin="auto"
        >
          <CVLayoutForPrint />
        </Box>
      )}
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          handleSetPrintNo();
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight="medium" textAlign="center">
            DOWNLOAD YOUR CV
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody mx="auto">
            <Box className="pdf">
              <ReactToPdf
                targetRef={ref}
                filename={`${user.given_name.toUpperCase()}_${user.family_name.toUpperCase()}CV.pdf`}
              >
                {({ toPdf }) => <Button onClick={toPdf}>Generate PDF</Button>}
              </ReactToPdf>
            </Box>
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
}
