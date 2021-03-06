import { Button, Input, Stack } from "@chakra-ui/react";
import { useState, useContext } from "react";
import { subContext } from "../../App";

export default function EducationUpload(): JSX.Element {
  const apiBaseURL = process.env.REACT_APP_API_BASE;
  const sub = useContext(subContext);
  const [institutionName, setInstitutionName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [qualificationLevel, setQualificationLevel] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const onSubmit = async () => {
    try {
      await fetch(apiBaseURL + `/create/education/${sub}`, {
        method: "POST",
        body: JSON.stringify({
          institutionName: institutionName,
          startDate: startDate,
          endDate: endDate,
          qualificationLevel: qualificationLevel,
          grade: grade,
          subject: subject,
        }),
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Stack spacing="5px">
      <Input
        type="form"
        placeholder="Input Education Institution"
        value={institutionName}
        onChange={(e) => setInstitutionName(e.target.value)}
      />
      <Input
        type="form"
        placeholder="Input start date in format MM-DD-YYYY"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <Input
        type="form"
        placeholder="Input date of graduation in format MM-DD-YYYY....."
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <Input
        type="form"
        placeholder="Input qualification level"
        value={qualificationLevel}
        onChange={(e) => setQualificationLevel(e.target.value)}
      />
      <Input
        type="form"
        placeholder="Input subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <Input
        type="form"
        placeholder="Input grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
      />
      <Button onClick={onSubmit} variant="outline">
        Save
      </Button>
    </Stack>
  );
}
