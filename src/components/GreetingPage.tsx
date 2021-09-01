import { Box } from "@chakra-ui/react";
import BasicDataUpload from "./DataUpload/BasicDataUpload";



export default function GreetingPage(): JSX.Element {
  return (
  <Box backgroundColor="gray.50" minH="100vh" >
  <BasicDataUpload />
  </Box>
  )
}
