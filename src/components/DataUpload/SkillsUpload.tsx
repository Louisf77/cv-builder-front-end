import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { ISkill } from "../../utils/types";

export default function SkillsUpload({ userID }: ISkill): JSX.Element {
  const apiBaseURL = process.env.REACT_APP_API_BASE;
  const [skill, setSkill] = useState("");
  const onSubmit = async () => {
    await fetch(apiBaseURL + `/create/skills/${userID}`, {
      method: "POST",
      body: JSON.stringify({
        skill: skill,
      }),
      headers: { "Content-Type": "application/json" },
    });
  };
  return (
    <>
      <Input
        type="form"
        placeholder="Add Skill"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />
      <Button onClick={onSubmit}>Add</Button>
    </>
  );
}
