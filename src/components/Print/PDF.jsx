import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import CVLayout from '../CV Structure/CVStructure';
import ReactPDF from '@react-pdf/renderer';
import { Box, Button } from '@chakra-ui/react';
import ReactToPdf from "react-to-pdf"
import React from "react";
import CVLayoutForPrint from './CVStructureForPrint';

// Create styles
const ref = React.createRef()

// Create Document Component
const MyDocument = () => (
//   <Document>
//       <Page size="A4">
//     <CVLayout />
//     </Page>
//     {ReactPDF.render(<MyDocument />, `./src/utils/example.pdf`)} 
//   </Document>
<>
  <div className ="pdf">
      <ReactToPdf targetRef={ref} filename="testcv.pdf" >
      {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>} 
      </ReactToPdf>
  </div>
  <Box ref={ref} className="pdf container" width="fit-content" margin="auto" >
  <CVLayoutForPrint />
  </Box>
  
    
</>
);

export default MyDocument



