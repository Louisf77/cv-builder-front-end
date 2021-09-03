// eslint-disable-next-line no-use-before-define
import React, { useState } from "react";
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

import CVLayoutForPrint from "./CVStructureForPrint";

const ref = React.createRef();
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Download() {
  const [print, setPrint] = useState("no");
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
          <ModalBody>
            <div className="pdf">
              <ReactToPdf targetRef={ref} filename={`.pdf`}>
                {({ toPdf }) => <Button onClick={toPdf}>Generate PDF</Button>}
              </ReactToPdf>
              {console.log(print)}
            </div>
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
}
