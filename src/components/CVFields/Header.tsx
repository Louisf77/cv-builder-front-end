import {
  Box,
  Center,
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
      <HStack mx="auto" width="fit-content">
        <StackItem>
          <Text
            fontSize="6xl"
            fontWeight="medium"
            align="center"
            padding="5px"
            color="rgb(40,164,175)"
          >
            {userData.first_name.toUpperCase()}
          </Text>
        </StackItem>
        <StackItem>
          <Text
            fontSize="6xl"
            fontWeight="medium"
            align="center"
            padding="5px"
            color="rgb(128,128,128)"
          >
            {userData.surname.toUpperCase()}
          </Text>
        </StackItem>
      </HStack>
      <Center w="795px">
        <HStack spacing="90px" margin="10px" padding="10px" align="center">
          <Box className="email" w="159px" h="30px">
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
          <Box className="mobile" w="159px" h="30px">
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
          <Box className="address" w="159px" h="30px" alignContent="center">
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
      </Center>
    </Box>
  );
}
