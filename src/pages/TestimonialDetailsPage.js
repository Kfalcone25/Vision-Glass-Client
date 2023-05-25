import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const API_URL = "http://localhost:4000";

const TestimonialDetailsPage = (props) => {
  const [testimonial, setTestimonial] = useState(null);

  const { testimonialId } = useParams();

  const getTestimonial = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/testimonials/${testimonialId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneTestimonial = response.data;
        setTestimonial(oneTestimonial);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getTestimonial();
  }, []);

  return (
    <div>
      <h1>Details Page</h1>

      {testimonial ? 
        <>
          <h1>{testimonial.firstName}</h1>
          <p>{testimonial.description}</p>
          <span>{testimonial.rating}</span>
        </>
        :
        <p>Loading...</p>
      }


      <Link to={`/testimonials/edit/${testimonialId}`}>
        <button>Edit</button>
      </Link>

      <Link to={'/'}>
        <button>Delete</button>
      </Link>
    </div>
  );
};

export default TestimonialDetailsPage;
