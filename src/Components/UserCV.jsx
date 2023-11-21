import React from "react";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Contacts from "./Contacts";

function UserCV() {
  const personalInfoData = {
    name: "Emily Mli",
    age: 19,
    location: "Baku, Azerbaijan"
  };

  const experienceData = ["Mentor at AzeRobot Education"];

  const contactsData = {
    email: "emiliyamirza24@gmail.com",
    phone: "+994XX-XXX-XX-XX"
  };

  return (
    <div>
      <h1>User CV</h1>
      <PersonalInfo {...personalInfoData} />
      <Experience experiences={experienceData} />
      <Contacts {...contactsData} />
    </div>
  );
}

export default UserCV;
