import { useAuth0 } from "@auth0/auth0-react";
import { Button, Center } from "@chakra-ui/react";

const SignupButton = (): JSX.Element => {
  const { loginWithPopup } = useAuth0();

  return (
    <Center>
      <Button
        variant="outline"
        alignSelf="center"
        maxWidth="300px"
        onClick={() => loginWithPopup()}
      >
        Let's Get Started
      </Button>
    </Center>
  );
};

export default SignupButton;
