import React from "react";
import "./Contact.css";
import Button from '@mui/material/Button';

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:localcharity@gmail.com">
        <Button>Contact:localcharity@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;