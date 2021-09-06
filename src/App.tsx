import { Box, ChakraProvider } from "@chakra-ui/react";
import CV from "./components/CV Structure/CVDisplay";
import GreetingPage from "./components/Login & greet/GreetingPage";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useState, createContext } from "react";
import { theme } from "./utils/themes";
import "@fontsource/montserrat";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

export const userContext = createContext<string>("");
export const subContext = createContext<string | undefined>("");
export const printContext = createContext<string>("no");
export const setPrintContext = createContext<(print: string) => void>(() => {
  console.log("");
});

function App(): JSX.Element {
  const { user } = useAuth0();
  const [userID, setUserID] = useState<string>("");
  const [memTest, setMemTest] = useState<number>(0);
  const [print, setPrint] = useState("no");

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
              <printContext.Provider value={print}>
                <setPrintContext.Provider value={setPrint}>
                  <Switch>
                    {memTest > 0 ? (
                      <>
                        <CV />
                      </>
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
                </setPrintContext.Provider>
              </printContext.Provider>
            </subContext.Provider>
          </Box>
        </ChakraProvider>
      </Router>
    </>
  );
}

export default App;
