import LoginButton from "../Auth/LoginButton";
import LogoutButton from "../Auth/LogoutButton";
import icon from "../../utils/quikcvIcon.png";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, HStack, Image } from "@chakra-ui/react";
import Download from "../Print/PDF";

export default function Header(): JSX.Element {
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return (
      <Box backgroundColor="gray.50">
        <Box h="80px" width="300px">
          <HStack
            paddingTop="5px"
            spacing="20px "
            marginRight="30px"
            backgroundColor="gray.300"
            height="80px"
            borderRadius="10px"
            boxShadow="md"
          >
            <Image src={icon} width="67.5625px" /> <LogoutButton /> <Download />
          </HStack>
        </Box>
      </Box>
    );
  } else {
    return <LoginButton />;
  }
}
