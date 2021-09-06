import { Box, Grid, GridItem, Stack, StackDivider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ICVLayout } from "../../utils/types";
import Education from "../CVFields/Education";
import Work from "../CVFields/Work";
import { useContext } from "react";
import { subContext } from "../../App";
import Interests from "../CVFields/Interests";
import Skills from "../CVFields/Skills";
import CVHeader from "../CVFields/Header";
import Bio from "../CVFields/Bio";
import Software from "../CVFields/Software";
import { createContext } from "react";

export const renderContext = createContext<(render: Date) => void>(() => {
  console.log("");
});

export default function CVLayout(): JSX.Element {
  const apiBaseURL = process.env.REACT_APP_API_BASE;
  const sub = useContext(subContext);
  const [userData, setUserData] = useState<ICVLayout>({
    user_id: 0,
    sub: "",
    first_name: "",
    surname: "",
    dob: "",
    email: "",
    mobile: "",
    address: "",
    education: [
      {
        ed_id: 0,
        institution_name: "",
        start_date: "",
        end_date: "",
        qualification_level: "",
        grade: "",
        subject: "",
      },
    ],
    work: [
      {
        work_id: 0,
        company_name: "",
        role: "",
        responsibilities: "",
        start_date: "",
        end_date: "",
      },
    ],
    interest: [
      {
        interest_id: 0,
        interest: "",
      },
    ],
    skill: [
      {
        skill_id: 0,
        skill: "",
      },
    ],
    bio: [
      {
        bio_id: 0,
        bio: "",
      },
    ],
    software: [
      {
        software_id: 0,
        software: "",
      },
    ],
  });
  const [render, setRender] = useState(new Date());

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(apiBaseURL + `/viewCV/${sub}`);
        const fullUserData = await response.json();
        setUserData(fullUserData.data.userData);
      } catch (err) {
        console.error(err.message);
      }
    }
    getData();
  }, [apiBaseURL, sub, render]);

  return (
    <renderContext.Provider value={setRender}>
      <Box backgroundColor="gray.50" minH="100vh">
        <Box
          maxWidth="795px"
          height="942px"
          alignItems="center"
          backgroundColor="white"
          margin="auto"
          boxShadow="lg"
          fontSize="10px"
          overflowY="scroll"
          sx={{
            "&::-webkit-scrollbar": {
              width: "10px",
              borderRadius: "8px",
              backgroundColor: "gray.50",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "gray.200",
              borderRadius: "10px",
            },
          }}
        >
          <CVHeader userData={userData} />
          <Grid
            templateColumns="repeat(10,1fr)"
            marginTop="15px"
            paddingLeft="20px"
            paddingRight="20px"
          >
            <GridItem colSpan={3}>
              <Stack
                divider={<StackDivider borderColor="gray.200" />}
                spacing="10px"
              >
                <Bio userData={userData} />
                <Software userData={userData} />
                <Skills userData={userData} />
                <Interests userData={userData} />
              </Stack>
            </GridItem>
            <GridItem colSpan={7} marginLeft="50px">
              <Stack
                divider={<StackDivider borderColor="gray.200" />}
                spacing="10px"
              >
                <Education userData={userData} />
                <Work userData={userData} />
              </Stack>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </renderContext.Provider>
  );
}
