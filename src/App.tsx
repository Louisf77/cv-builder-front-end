import { ChakraProvider } from "@chakra-ui/react";
import CV from "./components/CVDisplay";
import GreetingPage from "./components/GreetingPage";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useState, createContext } from "react";
import { theme } from "./utils/themes";
import "@fontsource/montserrat"

import { MainLogInScreen } from "./components/LoginScreen/MainScreen";

export const userContext = createContext<number>(1);

function App(): JSX.Element {
  const [userID, setUserID] = useState<number>(1);
  return (
    <>
      <Router>
        <ChakraProvider theme={theme}>
          <userContext.Provider value={userID}>
            {/* <MainLogInScreen /> */}
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
