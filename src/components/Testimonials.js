import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import TestimonialCard from "./TestimonialCard";
import AddTestimonial from "./AddTestimonial";

const API_URL = "http://localhost:4000";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  const { testimonialId } = useParams();

  const getAllTestimonials = () => {
    axios
      .get(`${API_URL}/testimonials`)
      .then((res) => setTestimonials(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllTestimonials();
  }, []);

  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <Link to={"/addTestimonial"}>
        <button type="button">Add Testimonial</button>
      </Link>
      <div className="testimonial-reviews">
        {testimonials.map((testimonial) => (
          <Link to={`/testimonials/${testimonial._id}`}><TestimonialCard key={testimonial._id} {...testimonial} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
