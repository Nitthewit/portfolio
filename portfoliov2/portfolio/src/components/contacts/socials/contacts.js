import React from "react";
import "./contacts.css"; // Assuming your CSS file is named contacts.css

function Contacts() {
  const contactInfo = {
    phoneNumber: "(+1) (267)-884-6580",
    email: "nithin.nambi04@gmail.com",
    venmo: "nitthewit",
    linkedIn: "https://www.linkedin.com/in/nithin-nambi-17209a216",
    github: "https://github.com/NithinNambi",
  };

  return (
    <div className="container">
      <div id="contactslink"></div>
      <div className="title">Contacts</div>
      <div className="contact-item">
        Phone Number: {contactInfo.phoneNumber}
      </div>
      <div className="contact-item">Email: {contactInfo.email}</div>

      <div className="contact-item">
        LinkedIn:{" "}
        <a
          href={contactInfo.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
        >
          {contactInfo.linkedIn}
        </a>
      </div>
      <div className="contact-item">
        GitHub:{" "}
        <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">
          {contactInfo.github}
        </a>
      </div>
      <div className="contact-item">Venmo: {contactInfo.venmo}</div>
    </div>
  );
}

export default Contacts;
