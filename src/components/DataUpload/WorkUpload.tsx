import { Button, Input, Stack, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { useContext } from "react";
import { subContext } from "../../App";

export default function WorkUpload(): JSX.Element {
  const sub = useContext(subContext);
  const apiBaseURL = process.env.REACT_APP_API_BASE;
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const onSubmit = async () => {
    try {
      await fetch(apiBaseURL + `/create/work/${sub}`, {
        method: "POST",
        body: JSON.stringify({
          companyName: companyName,
          role: role,
          startDate: startDate,
          endDate: endDate,
          responsibilities: responsibilities,
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
        placeholder="Input Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <Input
        type="form"
        placeholder="Input Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <Input
        type="form"
        placeholder="Input start date in format MM-DD-YYYY"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <Input
        type="form"
        placeholder="Input leaving date in format MM-DD-YYYY....."
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <Textarea
        type="form"
        placeholder="Input responsibilities"
        value={responsibilities}
        onChange={(e) => setResponsibilities(e.target.value)}
      />
      <Button onClick={onSubmit} variant="outline">
        Save
      </Button>
    </Stack>
  );
}
