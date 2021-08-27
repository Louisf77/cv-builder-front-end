import {
  Heading,
  Box,
  Grid,
  GridItem,
  List,
  ListItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ICVLayout, IUserID } from "../utils/types";
import EducationUpload from "./DataUpload/EducationUpload";
import Education from "./Education";

export default function CVLayout({ userID }: IUserID): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const apiBaseURL = process.env.REACT_APP_API_BASE;
  const [userData, setUserData] = useState<ICVLayout>({
    user_id: 1,
    first_name: "",
    surname: "",
    dob: "",
    email: "",
    mobile: "",
    address: "",
    eduction: [
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
          {/* <Box className="Education">
                   <Heading>Education</Heading>
                    {userData.eduction.map((obj,index)=> (
                         <Box key={index}>
                             <List>
                             <ListItem>{obj.institution_name}  {obj.start_date}-{obj.end_date}</ListItem>
                             <ListItem>{obj.qualification_level}</ListItem>
                             <ListItem>{obj.subject}</ListItem>
                             <ListItem>{obj.grade}</ListItem>
                             </List>
                        </Box>
                    ))}
                <Button onClick={onOpen}>Open Modal</Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <EducationUpload userID={userID} />
                    </ModalBody>
                    <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                    </Button>
                    </ModalFooter>
                </ModalContent>
                </Modal>
               </Box> */}
          <Education userData={userData} userID={userID} />
          <Box className="work">
            <Heading>Experience</Heading>
            {userData.work.map((obj, index) => (
              <Box key={index}>
                <List>
                  <ListItem>{obj.company_name}</ListItem>
                  <ListItem>
                    {obj.start_date}-{obj.end_date}
                  </ListItem>
                  <ListItem>{obj.role}</ListItem>
                  <ListItem>{obj.responsibilities}</ListItem>
                </List>
              </Box>
            ))}
          </Box>
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
