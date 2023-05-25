import axios from "axios";
import { useState } from "react";
import ContactForm from "../components/ContactForm";

const API_URL = "https://localhost:4000";

const ContactPage = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = "";
  const [lastName, setLastName] = "";
  const [message, setMessage] = "";

  const handleLoginSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div id="contact-page">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>
          Let people know what to reach out about and what to expect after
          contacting you. Don’t forget to choose a storage option for
          submissions.
        </p>
      </div>

      <div className="email-phone">
        <span>Email</span>
        <span>phone number</span>
      </div>

      <ContactForm /> 

      
    </div>
  );
};

export default ContactPage;
