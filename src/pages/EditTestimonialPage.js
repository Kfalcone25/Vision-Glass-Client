import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";  
import axios from "axios";

// const API_URL = "https://visionserver.fly.dev";
const API_URL = "http://localhost:4000"

const EditTestimonialPage = () => {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);
  
  const { testimonialId } = useParams();

  const navigate = useNavigate()

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const requestBody = {firstName, lastName, description, rating};

    axios
      .put(`${API_URL}/testimonials/${testimonialId}`, requestBody)
      .then((response) => {
        console.log("Updated: ", response.data)

        navigate(`/testimonials/${testimonialId}`)
      })
      .catch((err) => {
        console.log(err)
      })
  };

  const deleteTestimonial = () => {

    axios
      .delete(`$API_URL}/testimonials/${testimonialId}`)
      .then((response) => {
        console.log("Delete response", response.data)
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    axios
    .get(`${API_URL}/testimonials/${testimonialId}`)
    .then((response) => {
      const oneTestimonial = response.data;
      setFirstName(oneTestimonial.firstName);
      setLastName(oneTestimonial.lastName)
      setDescription(oneTestimonial.description)
      setRating(oneTestimonial.rating)
    })
    .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
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

      <button onClick={deleteTestimonial}>Delete</button>
    </div>
  )
}

export default EditTestimonialPage