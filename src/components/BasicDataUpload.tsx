import { useState } from "react";
import { Button, Textarea } from "@chakra-ui/react";

export default function BasicDataUpload(): JSX.Element {
  const apiBaseURL = process.env.REACT_APP_API_BASE;
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
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
        }),
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <Textarea
        type="form"
        placeholder="Input first name....."
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Textarea
        type="form"
        placeholder="Input surname....."
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <Textarea
        type="form"
        placeholder="Input date of birth in format MM-DD-YYYY....."
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <Textarea
        type="form"
        placeholder="Input email....."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Textarea
        type="form"
        placeholder="Input mobile....."
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <Button onClick={onSubmit} variant="outline">
        Save
      </Button>
    </>
  );
}
