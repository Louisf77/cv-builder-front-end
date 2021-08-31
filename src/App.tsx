import { ChakraProvider } from "@chakra-ui/react";
import DataUpload from "./components/DataUpload";
import GreetingPage from "./components/GreetingPage";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useState,createContext } from "react";

export const userContext = createContext<number>(1)

function App(): JSX.Element {
  const [userID, setUserID] = useState<number>(1)
  return (
    <>
    <Router>
    <ChakraProvider>
      <userContext.Provider value={userID}>
        <Switch>
          <Route path={`/viewCV/${userID}`}>
            <DataUpload />
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
