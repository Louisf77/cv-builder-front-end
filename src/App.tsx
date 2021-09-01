import { ChakraProvider } from "@chakra-ui/react";
import CV from "./components/CVDisplay";
import GreetingPage from "./components/GreetingPage";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useState, createContext } from "react";
import { theme } from "./utils/themes";
import "@fontsource/montserrat";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "./components/Header";

export const userContext = createContext<number>(1);

function App(): JSX.Element {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [userID, setUserID] = useState<number>(1);

  return (
    <>
      <Router>
        <ChakraProvider theme={theme}>
          <userContext.Provider value={userID}>
            <Header />
            <Switch>
              <Route path={`/viewCV/${userID}`}>
                <CV />
              </Route>
              <Route path="/">
                <GreetingPage />
              </Route>
            </Switch>
          </userContext.Provider>
        </ChakraProvider>
      </Router>
    </>
  );
}

export default App;
