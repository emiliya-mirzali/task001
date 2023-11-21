import React from "react";

function Contacts(props) {
  return (
    <div>
      <h2>Contacts</h2>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
    </div>
  );
}

export default Contacts;
