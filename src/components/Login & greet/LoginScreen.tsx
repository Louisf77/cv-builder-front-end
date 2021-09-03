import { Box, Center, Heading, Image, VStack } from "@chakra-ui/react";
import SignupButton from "../Auth/SignupButton";
import logo from "../../utils/quikcvLogo.png";
import icon from "../../utils/quikcvIcon.png";

export default function LoginScreen(): JSX.Element {
  return (
    <>
      <Center h="100vh" w="100vw">
        <VStack>
          <Image src={icon} width="135.125px" />
          <Image src={logo} width="540.5px" align="center" />
          <Box
            width="700px"
            borderRadius="15"
            margin="auto"
            height="200px"
            boxShadow="md"
            backgroundColor="white"
            paddingTop="50px"
            align="center"
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
        </VStack>
      </Center>
    </>
  );
}
