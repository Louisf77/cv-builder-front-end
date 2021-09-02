import { Button, Input, Stack } from "@chakra-ui/react";
import { useState, useContext } from "react";
import { subContext } from "../../App";

export default function SkillsUpload(): JSX.Element {
  const apiBaseURL = process.env.REACT_APP_API_BASE;
  const sub = useContext(subContext);
  const [skill, setSkill] = useState("");
  const onSubmit = async () => {
    await fetch(apiBaseURL + `/create/skills/${sub}`, {
      method: "POST",
      body: JSON.stringify({
        skill: skill,
      }),
      headers: { "Content-Type": "application/json" },
    });
  };
  return (
    <Stack>
      <Input
        type="form"
        placeholder="Add Skill"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />
      <Button onClick={onSubmit} variant="outline">
        Add
      </Button>
    </Stack>
  );
}
