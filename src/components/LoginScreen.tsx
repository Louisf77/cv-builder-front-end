import { Box, Center, Heading } from "@chakra-ui/react";
import SignupButton from "./Auth/SignupButton";

export default function LoginScreen(): JSX.Element {
  return (
    <>
      <Center h="100vh" w="100vw">
        <Box
          width="700px"
          borderRadius="15"
          margin="auto"
          height="200px"
          boxShadow="md"
          backgroundColor="white"
          paddingTop="50px"
        >
          <Heading
            align="center"
            fontSize="20px"
            fontWeight="medium"
            marginBottom="50px"
          >
            SIGN IN OR CREATE AN ACCOUNT TO GET STARTED
          </Heading>

          <SignupButton />
        </Box>
      </Center>
    </>
  );
}
