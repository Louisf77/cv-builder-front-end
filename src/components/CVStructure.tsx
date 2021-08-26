import { Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ICVLayout } from "../utils/types";


export default function CVLayout({userID} : ICVLayout) :JSX.Element {
    const apiBaseURL = process.env.REACT_APP_API_BASE;
    const [userData,setUserData] = useState([])
    useEffect(() => {
        async function getData() {
          try {
            const response = await fetch(apiBaseURL + `/viewCV/${userID}`);
            const fullUserData = await response.json();
            setUserData(fullUserData.data.userData);
            console.log(userData)
          } catch (err) {
            console.error(err.message);
          }
        }
        getData();
      }, [apiBaseURL,userID,userData]);
    return (
        <>
        <Heading></Heading>
         </>
    )
}