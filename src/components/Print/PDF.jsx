import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import ReactToPdf from "react-to-pdf";
import { BiShareAlt } from "react-icons/bi";

import CVLayoutForPrint from "./CVStructureForPrint";
import { printContext } from "../../App";
import { setPrintContext } from "../../App"


const ref = React.createRef();

export default function Download() {
  const print = useContext(printContext);
  const setPrint = useContext(setPrintContext);
  const handleSetPrint = () => setPrint(true);
  const handleSetPrintNo = () => setPrint(false);
  const [filename, setFilename] = useState("")
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
      />
      {print === true && (
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
            <VStack>
            <Input
            value={filename}
            placeholder="Input File Name"
            onChange= {(e) => setFilename(e.target.value)}
            />
            <Box className="pdf">
              <ReactToPdf targetRef={ref} filename={filename=== ""? `CV.pdf` : `${filename}.pdf`}>
                {({ toPdf }) => <Button onClick={toPdf}>Generate PDF</Button>}
              </ReactToPdf>
            </Box>
            </VStack>
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
}
