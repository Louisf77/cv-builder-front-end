import LoginButton from "../Auth/LoginButton";
import LogoutButton from "../Auth/LogoutButton";
import icon from "../../utils/quikcvIcon.png"
import { useAuth0 } from "@auth0/auth0-react";
import { Flex, Image } from "@chakra-ui/react";

export default function Header(): JSX.Element {
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return (
   <Flex> <Image src={icon}width="67.5625px"/> <LogoutButton /></Flex>
    )
  } 
  else  {
    return <LoginButton />;
  } 
}
