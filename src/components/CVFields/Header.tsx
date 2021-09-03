import {
  Box,
  HStack,
  IconButton,
  StackItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IUserData } from "../../utils/types";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";


export default function CVHeader({ userData }: IUserData): JSX.Element {
  return (
    <Box backgroundColor="rgb(247,247,247)" h="180px">
      <Text
        bgGradient={[
          "linear(to-tr, teal.300,yellow.400)",
          "linear(to-t, blue.200, teal.500)",
          "linear(to-b, orange.100, purple.300)",
        ]}
        bgClip="text"
        fontSize="6xl"
        fontWeight="medium"
        align="center"
        padding="5px"
      >
        {userData.first_name.toUpperCase()} {userData.surname.toUpperCase()}
      </Text>
      <HStack spacing="20%" margin="10px" padding="10px" align="center">
        <Box className="email" w="119px" h="30px">
          <VStack spacing="2px">
            <StackItem>
              <IconButton
                aria-label="email"
                isRound={true}
                icon={<HiOutlineMail />}
                border="1px"
                size="xs"
                backgroundColor="rgb(247,247,247)"
              />
            </StackItem>
            <StackItem>{userData.email}</StackItem>
          </VStack>
        </Box>
        <Box className="mobile" w="119px" h="30px">
          <VStack spacing="2px">
            <StackItem>
              <IconButton
                aria-label="email"
                isRound={true}
                icon={<AiOutlinePhone />}
                border="1px"
                size="xs"
                backgroundColor="rgb(247,247,247)"
              />
            </StackItem>
            <StackItem>{userData.mobile}</StackItem>
          </VStack>
        </Box>
        <Box className="address" w="119px" h="30px" alignContent="center">
          <VStack spacing="2px">
            <StackItem>
              <IconButton
                aria-label="email"
                isRound={true}
                icon={<GrLocation />}
                border="1px"
                size="xs"
                backgroundColor="rgb(247,247,247)"
              />
            </StackItem>
            <StackItem textAlign="center">{userData.address}</StackItem>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
}
