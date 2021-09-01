import { Button, Input, Stack } from "@chakra-ui/react";
import { useState, useContext } from "react";
import { userContext } from "../../App";

export default function InterestsUpload(): JSX.Element {
  const apiBaseURL = process.env.REACT_APP_API_BASE;
  const userID = useContext(userContext);
  const [interest, setInterest] = useState("");
  const onSubmit = async () => {
    try {
      await fetch(apiBaseURL + `/create/interests/${userID}`, {
        method: "POST",
        body: JSON.stringify({
          interest: interest,
        }),
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <Stack>
      <Input
        type="form"
        value={interest}
        placeholder="Add Interest"
        onChange={(e) => setInterest(e.target.value)}
      />
      <Button onClick={onSubmit} variant="outline">Save</Button>
    </Stack>
  );
}
