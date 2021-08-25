import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import BasicDataUpload from "./components/BasicDataUpload";
import EducationUpload from "./components/EducationUpload";
import InterestsUpload from "./components/InterestsUpload";
import SkillsUpload from "./components/SkillsUpload";
import WorkUpload from "./components/WorkUpload";

function App(): JSX.Element {
  const [userID, setUserID] = useState<number>(1); //change to pick from a drop down
  return (
    <>
      <ChakraProvider>
        <BasicDataUpload />
        <EducationUpload userID={userID} />
        <WorkUpload userID={userID} />
        <InterestsUpload userID={userID} />
        <SkillsUpload userID={userID} />
      </ChakraProvider>
    </>
  );
}

export default App;
