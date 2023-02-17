import React,{ Fragment } from "react";
import "./Contact.css";
import Button from '@mui/material/Button';
import Footer from "../footer/Footer"
const Contact = () => {
  return (
    
<Fragment>

  <div className="contactContainer">
      <a className="mailBtn" href="mailto:localcharity@gmail.com">
        <Button>Contact:localcharity@gmail.com</Button>
      </a>
    </div>
    <div className="footer">
    <Footer/>
    </div>
    

 


</Fragment>

  
  );
};

export default Contact;