import React from "react";
import Female from "../img/female.png";
import Male from "../img/male.png";
import It from "../img/it.png";

export default function Contact(props) {
  const { contact } = props;

  return (
    <div className="contact-container">
      {contact.gender ? (
        <img
          src={contact.gender === "female" ? Female : Male}
          width="30px"
          alt="img"
        />
      ) : <img
      src={It}
      width="30px"
      alt="img"
    />}

      <p className="contact-item">{contact.firstName} {contact.lastName}</p>
      <p className="contact-item">{contact.phone}</p>
      
    </div>
  );
}