import React from "react";
function PersonalInfo(props) {
    return (
      <div>
        <h2>Personal Information</h2>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Location: {props.location}</p>
      </div>
    );
  }
  
  export default PersonalInfo;