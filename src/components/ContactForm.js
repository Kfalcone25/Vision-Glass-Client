import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const API_URL = "https://visionserver.fly.dev";
// const API_URL = "http://localhost:4000";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [zip, setZip] = useState();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [details, setDetails] = useState("");

  const navigate = useNavigate();

  const { storeToken } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleZip = (e) => setZip(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleService = (e) => setService(e.target.value);
  const handleDetails = (e) => setDetails(e.target.value);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name, zip, email, phone, service, details };

    axios
      .post(`${API_URL}/users/contact`, requestBody)
      .then((response) => {
        // Request to the server's endpoint `/auth/login` returns a response
        // with the JWT string ->  response.data.authToken

        console.log("JWT token", response.data.authToken);

        storeToken(response.data.authToken);

        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Contact Form</h1>

      <form onSubmit={handleContactSubmit}>
        <div class="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            // value={name}
            onChange={handleName}
            class="form-control"
          />
        </div>

        <div class="form-group">
          <label>Zip Code</label>
          <input
            type="zip"
            name="zip"
            onChange={handleZip}
            value={zip}
            class="form-control"
          />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
            class="form-control"
            placeholder="name@example.com"
          />
        </div>

        <div class="form-group">
          <label>Phone</label>
          <input
            type="number"
            name="phone"
            value={phone}
            onChange={handlePhone}
            class="form-control"
          />
        </div>

        <div class="form-group">
          <label>Service</label>
          <input
            type="text"
            name="service"
            value={service}
            onChange={handleService}
            class="form-control"
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Details</label>
          <textarea
            type="text"
            name="details"
            // value={details}
            onChange={handleDetails}
            class="form-control"
            id="exampleFormControlTextarea1"
          ></textarea>
        </div>
      </form>

      <button type="submit">Submit</button>
    </div>
  );
};

export default ContactForm;
