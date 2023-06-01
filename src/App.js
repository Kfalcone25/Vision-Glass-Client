import "./App.css";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import CommercialPage from "./pages/CommercialPage";
import ResidentialPage from "./pages/ResidentialPage";
import ServicesPage from "./pages/ServicesPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import TestimonialDetailsPage from "./pages/TestimonialDetailsPage";
import EditTestimonialPage from "./pages/EditTestimonialPage";
import AddTestimonialPage from "./pages/AddTestimonialPage";
import IsAnon from "./components/IsAnon";
import IsPrivate from "./components/IsPrivate";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/commercial" element={<CommercialPage />} />
        <Route path="/residential" element={<ResidentialPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/auth/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/addTestimonial" element={<AddTestimonialPage />} />
        <Route path="/testimonials/:testimonialId" element={<TestimonialDetailsPage />} />
        <Route path="/testimonials/edit/:testimonialId" element={<EditTestimonialPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
