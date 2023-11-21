import React from "react";
function Experience(props) {
    return (
      <div>
        <h2>Experience</h2>
        <ul>
          {props.experiences.map((experience, index) => (
            <li key={index}>{experience}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Experience;
  