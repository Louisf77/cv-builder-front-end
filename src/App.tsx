import { Box, ChakraProvider } from "@chakra-ui/react";
import CV from "./components/CV Structure/CVDisplay";
import GreetingPage from "./components/Login & greet/GreetingPage";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useState, createContext } from "react";
import { theme } from "./utils/themes";
import "@fontsource/montserrat";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import MyDocument from "./components/Print/PDF";

export const userContext = createContext<string>("");
export const subContext = createContext<string | undefined>("");
function App(): JSX.Element {
  const { user } = useAuth0();
  const [userID, setUserID] = useState<string>("");
  const [memTest, setMemTest] = useState<number>(0);

  // console.log({user,userID,memTest,usersub:user?.sub,renderCount})
  const apiBaseURL = process.env.REACT_APP_API_BASE;
  useEffect(() => {
    if (user?.sub !== undefined) {
      setUserID(user.sub);
    }
  }, [user?.sub]);

  useEffect(() => {
    async function getData() {
      if (userID !== "") {
        try {
          const response = await fetch(apiBaseURL + `/${userID}`);
          setMemTest(await response.json());
        } catch (err) {
          console.error(err.message);
        }
      }
    }
    getData();
  }, [apiBaseURL, userID]);
  console.log(memTest);
  return (
    <>
    
      <Router>
        <ChakraProvider theme={theme}>
        <Box backgroundColor="gray.50" minH="100vh">
          <subContext.Provider value={user?.sub}>
            <Switch>
              {memTest > 0 ? (
                <CV />
              ) : (
                <>
                  <Route path={`/viewCV/${userID}`}>
                    <CV />
                  </Route>
                  <Route path="/">
                    <GreetingPage />
                  </Route>
                </>
              )}
            </Switch>
            <MyDocument />
          </subContext.Provider>
          </Box>
        </ChakraProvider>
      </Router>
    </>
  );
}

export default App;
