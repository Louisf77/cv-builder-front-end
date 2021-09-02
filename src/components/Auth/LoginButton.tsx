import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";

const LoginButton = (): JSX.Element => {
  const { loginWithPopup } = useAuth0();

  return (
    <Button variant="outline" onClick={() => loginWithPopup()}>
      Log In
    </Button>
  );
};

export default LoginButton;
