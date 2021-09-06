import {
  Box,
  chakra,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import SignupButton from "../Auth/SignupButton";
import logo from "../../utils/quikcvLogo.png";
import icon from "../../utils/quikcvIcon.png";
import screenShot from "../../utils/screenshotForLogin.png";

export default function LoginScreen(): JSX.Element {
  return (
    <>
      <VStack paddingTop="20px">
        <Image src={icon} width="135.125px" />
        <Image src={logo} width="540.5px" align="center" />

        <Box px={8} py={24} mx="auto">
          <Box
            w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
            mx="auto"
            textAlign={{ base: "left", md: "center" }}
          >
            <chakra.h1
              mb={6}
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="bold"
              lineHeight="none"
              letterSpacing={{ base: "normal", md: "tight" }}
              color={useColorModeValue("gray.900", "gray.100")}
            >
              Everything{" "}
              <Text
                display={{ base: "block", lg: "inline" }}
                w="full"
                bgClip="text"
                bgGradient="linear(to-r, green.400,purple.500)"
                fontWeight="extrabold"
              >
                about you
              </Text>{" "}
              in one single place.
            </chakra.h1>
            <chakra.p
              px={{ base: 0, lg: 24 }}
              mb={6}
              fontSize={{ base: "lg", md: "xl" }}
              color={useColorModeValue("gray.600", "gray.300")}
            >
              QuikCV is an all in one CV building tool, with a focus on ease of
              use and creating an easy to share clean CV that employers can't
              say no to.
            </chakra.p>
            <Stack
              direction={{ base: "column", sm: "row" }}
              mb={{ base: 4, md: 8 }}
              spacing={2}
              justifyContent={{ sm: "left", md: "center" }}
            >
              <SignupButton />
            </Stack>
          </Box>
          <Box
            w={{ base: "full", md: 10 / 12 }}
            mx="auto"
            mt={20}
            textAlign="center"
          >
            <Image
              w="full"
              rounded="lg"
              shadow="2xl"
              src={screenShot}
              alt="Hellonext feedback boards software screenshot"
            />
          </Box>
        </Box>
      </VStack>
    </>
  );
}
