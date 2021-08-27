import { ChakraProvider } from "@chakra-ui/react";
import DataUpload from "./components/DataUpload";
import GreetingPage from "./components/GreetingPage";

function App(): JSX.Element {
  return (
    <>
      <ChakraProvider>
        {/* <GreetingPage /> */}
        <DataUpload />
      </ChakraProvider>
    </>
  );
}

export default App;
