import React, { useState } from "react";
import axios from "axios";

const API_URL = "https://visionserver.fly.dev";
// const API_URL = "http://localhost:4000"

const AddTestimonial = ({ refreshTestimonials }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { firstName, lastName, description, rating };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .post(`${API_URL}/testimonials`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log("New Testimonial", response.data)
        // Reset the state
        setFirstName("");
        setLastName("");
        setDescription("");
        setRating(0);
        refreshTestimonials();
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          type="firstName"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label>Last Name:</label>
        <input
          type="lastName"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label>Description:</label>
        <input
          type="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Rating:</label>
        <input
          type="rating"
          name="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddTestimonial;
