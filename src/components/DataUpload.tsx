import { useState } from "react";
import CVLayout from "./CVStructure";
import BioUpload from "./DataUpload/BioUpload";
import InterestsUpload from "./DataUpload/InterestsUpload";
import SkillsUpload from "./DataUpload/SkillsUpload";
import WorkUpload from "./DataUpload/WorkUpload";

export default function DataUpload(): JSX.Element {
  return (
    <>
      <CVLayout />
      {/* <BioUpload userID={userID} />
        
        <WorkUpload userID={userID} />
        <InterestsUpload userID={userID} />
        <SkillsUpload userID={userID} /> */}
    </>
  );
}
