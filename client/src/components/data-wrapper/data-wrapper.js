import React, { useEffect, useState } from "react";
import App from "../app/app";

function DataWrapper(props) {
  console.log(props);

  const [bData, setBData] = useState([]);

  const getBirthdayPerson = () => {
    //https://monsterlessons.com/project/lessons/poluchenie-dannyh-ot-servera-s-pomoshyu-fetch
    fetch("http://localhost:4000/birthdayPerson")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log("data", data);
        setBData(data);
      })
      .catch(function (error) {
        console.log("error", error);
      });
  };


  // eslint-disable-next-line no-undef
  useEffect(() => {
    getBirthdayPerson();
  }, []);

  if (bData.length > 0) {
    return <props.component data={bData} />;
  }
  return <div>Loading...</div>
}

export default DataWrapper;
