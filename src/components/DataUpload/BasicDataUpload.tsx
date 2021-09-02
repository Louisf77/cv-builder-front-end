import { useContext, useState } from "react";
import { Box, Button, Center, Heading, Input, Stack } from "@chakra-ui/react";
import { HashRouter as Router, Link } from "react-router-dom";
import { subContext } from "../../App";

export default function BasicDataUpload(): JSX.Element {
  const sub = useContext(subContext);
  const apiBaseURL = process.env.REACT_APP_API_BASE;
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  const onSubmit = async () => {
    try {
      await fetch(apiBaseURL + "/create/personal-details", {
        method: "POST",
        body: JSON.stringify({
          firstName: firstName,
          surname: surname,
          dob: dob,
          email: email,
          mobile: mobile,
          address: address,
          sub: sub,
        }),
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Center h="100vh" w="100vw">
      <Box
        width="700px"
        borderRadius="5"
        margin="auto"
        height="600px"
        boxShadow="md"
        backgroundColor="white"
        paddingTop="50px"
      >
        <Heading
          align="center"
          fontSize="20px"
          fontWeight="medium"
          marginBottom="50px"
        >
          INPUT YOUR PERSONAL DETAILS
        </Heading>
        <Stack align="center">
          <Input
            type="form"
            placeholder="Input first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            width="600px"
          />
          <Input
            type="form"
            placeholder="Input surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            width="600px"
          />
          <Input
            type="form"
            placeholder="Input date of birth in format MM-DD-YYYY"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            width="600px"
          />
          <Input
            type="form"
            placeholder="Input email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            width="600px"
            isRequired={true}
          />
          <Input
            type="form"
            placeholder="Input mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            width="600px"
          />
          <Input
            type="form"
            placeholder="Input address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            width="600px"
          />
          <Router>
            <Link to={`/viewCV/${sub}`}>
              <Button onClick={onSubmit} variant="outline" marginTop="20px">
                Save & Continue
              </Button>
            </Link>
          </Router>
        </Stack>
      </Box>
    </Center>
  );
}
