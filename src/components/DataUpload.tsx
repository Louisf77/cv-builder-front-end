import { useState } from "react";
import BioUpload from "./DataUpload/BioUpload";
import EducationUpload from "./DataUpload/EducationUpload";
import InterestsUpload from "./DataUpload/InterestsUpload";
import SkillsUpload from "./DataUpload/SkillsUpload";
import WorkUpload from "./DataUpload/WorkUpload";

export default function DataUpload():JSX.Element{
    const [userID, setUserID] = useState<number>(1); //change to pick from a drop down
    return (
        <>
        <BioUpload userID={userID} />
        <EducationUpload userID={userID} />
        <WorkUpload userID={userID} />
        <InterestsUpload userID={userID} />
        <SkillsUpload userID={userID} />
        </>
    )
}