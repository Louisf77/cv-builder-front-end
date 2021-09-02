import LoginButton from "./Auth/LoginButton";
import LogoutButton from "./Auth/LogoutButton";

import { useAuth0 } from "@auth0/auth0-react";

export default function Header(): JSX.Element {
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return <LogoutButton />;
  } else {
    return <LoginButton />;
  }
}
