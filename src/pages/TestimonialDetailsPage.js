import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { baseUrl } from "../services/baseUrl";

const TestimonialDetailsPage = (props) => {
  const [testimonial, setTestimonial] = useState(null);

  const navigate = useNavigate()

  const { testimonialId } = useParams();

  const getTestimonial = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(`${baseUrl}/testimonials/${testimonialId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log("this is line 23", response.data)
        const oneTestimonial = response.data;
        setTestimonial(oneTestimonial);
      })
      .catch((error) => console.log(error));
  };

  const deleteTestimonial = () => {

    axios
      .delete(`${baseUrl}/testimonials/${testimonialId}`)
      .then((response) => {
        console.log("Delete response", response.data)

        navigate("/")
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getTestimonial();
  }, []);

  return (
    <div>
      <h1>Details Page</h1>

      {testimonial ? 
        <>
          <h1>{testimonial.firstName}</h1>
          <span>{testimonial.lastName}</span>
          <p>{testimonial.description}</p>
          <span>{testimonial.rating}</span>
        </>
        :
        <p>Loading...</p>
      }


      <Link to={`/testimonials/edit/${testimonialId}`}>
        <button>Edit</button>
      </Link>

      
        <button onClick={deleteTestimonial}>Delete</button>
    </div>
  );
};

export default TestimonialDetailsPage;
