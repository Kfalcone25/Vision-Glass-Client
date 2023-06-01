import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import TestimonialCard from "./TestimonialCard";
import AddTestimonial from "./AddTestimonial";
import { baseUrl } from "../services/baseUrl";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  const { testimonialId } = useParams();

  const getAllTestimonials = () => {
    axios
      .get(`${baseUrl}/testimonials`)
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
