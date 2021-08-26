import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { IInterest } from "../../utils/types";

export default function InterestsUpload({ userID }: IInterest): JSX.Element {
  const apiBaseURL = process.env.REACT_APP_API_BASE;
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
    <>
      <Input
        type="form"
        value={interest}
        placeholder="Add Interest"
        onChange={(e) => setInterest(e.target.value)}
      />
      <Button onClick={onSubmit}>Save</Button>
    </>
  );
}
