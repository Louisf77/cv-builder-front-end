import { Button, Input, Stack } from "@chakra-ui/react";
import { useState, useContext } from "react";
import { subContext } from "../../App";

export default function SoftwareUpload(): JSX.Element {
  const apiBaseURL = process.env.REACT_APP_API_BASE;
  const sub = useContext(subContext);
  const [software, setSoftware] = useState("");

  const onSubmit = async () => {
    try {
      await fetch(apiBaseURL + `/create/software/${sub}`, {
        method: "POST",
        body: JSON.stringify({
          software: software,
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
        placeholder="Add a software skill"
        value={software}
        onChange={(e) => setSoftware(e.target.value)}
      />
      <Button onClick={onSubmit} variant="outline" >Add</Button>
    </Stack>
  );
}
