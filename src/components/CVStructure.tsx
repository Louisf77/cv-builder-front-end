import {
  Heading,
  Box,
  Grid,
  GridItem,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ICVLayout } from "../utils/types";
import Education from "./Education";
import Work from "./Work";
import { useContext } from "react";
import { userContext } from "../App";



export default function CVLayout(): JSX.Element {
  const apiBaseURL = process.env.REACT_APP_API_BASE;
  const userID = useContext(userContext)
  const [userData, setUserData] = useState<ICVLayout>({
    user_id: 1,
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
    <>
      <Heading align="center" marginTop="10px">
        {userData.first_name} {userData.surname}
      </Heading>
      <Grid templateColumns="repeat(10,1fr)">
        <GridItem colSpan={3}>
          <Box className="Details">
            <Heading>Details</Heading>
            <List>
              <ListItem>{userData.email}</ListItem>
              <ListItem>{userData.mobile}</ListItem>
              <ListItem>{userData.address}</ListItem>
            </List>
          </Box>
          <Box className="Bio">
            <Heading>About Me</Heading>
            {userData.bio.map((obj, index) => (
              <Box key={index}>{obj.bio}</Box>
            ))}
          </Box>
          <Box className="Skills">
            <Heading>Skills</Heading>
            {userData.skill.map((obj, index) => (
              <Box key={index}> {obj.skill} </Box>
            ))}
          </Box>
        </GridItem>
        <GridItem colSpan={7}>
          <Education userData={userData}  />
          <Work userData={userData}  />
          <Box className="interests">
            <Heading>Interests</Heading>
            {userData.interest.map((obj, index) => (
              <Box key={index}>{obj.interest}</Box>
            ))}
          </Box>
        </GridItem>
      </Grid>

      {/* Heading of Name
    column 1 => Details,bio,skills
    column 2 => education,experience, interests, jobspec? */}
    </>
  );
}
