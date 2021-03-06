import { useAuth0 } from "@auth0/auth0-react";
import { Box } from "@chakra-ui/react";
import Header from "../CV Structure/Header";
import BasicDataUpload from "../DataUpload/BasicDataUpload";
import LoginScreen from "./LoginScreen";

export default function GreetingPage(): JSX.Element {
  const { isAuthenticated } = useAuth0();
  return (
    <Box backgroundColor="gray.50" minH="100vh">
      {isAuthenticated ? (
        <>
          {" "}
          <Header /> <BasicDataUpload />{" "}
        </>
      ) : (
        <LoginScreen />
      )}
    </Box>
  );
}
