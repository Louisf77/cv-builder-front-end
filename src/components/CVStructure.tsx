import { Heading, Box, Grid, GridItem, List, ListItem,Text, Stack, VStack, StackDivider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ICVLayout } from "../utils/types";
import Education from "./CVFields/Education";
import Work from "./CVFields/Work";
import { useContext } from "react";
import { userContext } from "../App";
import Interests from "./CVFields/Interests";
import Skills from "./CVFields/Skills";

export default function CVLayout(): JSX.Element {
  const apiBaseURL = process.env.REACT_APP_API_BASE;
  const userID = useContext(userContext);
  const [userData, setUserData] = useState<ICVLayout>({
    user_id: 0,
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
  });
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(apiBaseURL + `/viewCV/${userID}`);
        const fullUserData = await response.json();
        setUserData(fullUserData.data.userData);
      } catch (err) {
        console.error(err.message);
      }
    }
    getData();
  }, [apiBaseURL, userID]);
  return (
    <Box backgroundColor="gray.50" minH="100vh">
    <Box maxWidth="595px" height="842px" alignItems="center" backgroundColor="white" margin="auto" padding="10px" boxShadow="lg" fontSize="10px" overflowY="scroll">
    <Text
      bgGradient={[
        "linear(to-tr, teal.300,yellow.400)",
        "linear(to-t, blue.200, teal.500)",
        "linear(to-b, orange.100, purple.300)",
      ]}
      bgClip="text"
      fontSize="6xl"
      fontWeight="extrabold"
      align="center" marginTop="10px"
    >
      {userData.first_name.toUpperCase()} {userData.surname.toUpperCase()}
    </Text>
      <Grid templateColumns="repeat(10,1fr)">
        <GridItem colSpan={3} marginRight="10px">
          <Box className="Details">
            <Heading fontSize="20px" align="center" backgroundColor="gray.500" color="white">DETAILS</Heading>
            <List>
              <ListItem>{userData.email}</ListItem>
              <ListItem>{userData.mobile}</ListItem>
              <ListItem>{userData.address}</ListItem>
            </List>
          </Box>
          <Box className="Bio">
            <Heading align="center" fontSize="20px" backgroundColor="pink">ABOUT ME</Heading>
            {userData.bio.map((obj, index) => (
              <Box key={index}>{obj.bio}</Box>
            ))}
          </Box>
          <Skills userData={userData} />
          <Interests userData={userData} />
        </GridItem>
        <GridItem colSpan={7}>
        <Stack
        divider={<StackDivider borderColor="gray.200" />}
        spacing="10px"
        >
          <Education userData={userData} />
          <Work userData={userData} />
          
          </Stack>
        </GridItem>
      </Grid>
    </ Box>
    </Box>  );
}
