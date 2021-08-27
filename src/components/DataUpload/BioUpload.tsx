import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { IUserID } from "../../utils/types";

export default function BioUpload({ userID }: IUserID): JSX.Element {
  const apiBaseURL = process.env.REACT_APP_API_BASE;
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
    <>
      <Input
        type="form"
        placeholder="Add a bit about yourself"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <Button onClick={onSubmit}>Add</Button>
    </>
  );
}
