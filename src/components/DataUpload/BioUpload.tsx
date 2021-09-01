import { Button, Input, Stack } from "@chakra-ui/react";
import { useState, useContext } from "react";
import { userContext } from "../../App";

export default function BioUpload(): JSX.Element {
  const apiBaseURL = process.env.REACT_APP_API_BASE;
  const userID = useContext(userContext);
  const [bio, setBio] = useState("");

  const onSubmit = async () => {
    try {
      await fetch(apiBaseURL + `/create/bio/${userID}`, {
        method: "POST",
        body: JSON.stringify({
          bio: bio,
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
        placeholder="Add a bit about yourself"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <Button onClick={onSubmit}>Add</Button>
    </Stack>
  );
}
