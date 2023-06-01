import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="contact-footer">
          <h2 className="footer-h2">Contact</h2>
          <Link to={"/"}>
            <p>Phone: (888) 888-8888</p>
            <p>Email: example@example.com</p>
          </Link>
        </div>

        <div className="contact-footer">
          <h2 className="footer-h2">Location</h2>
          <Link to={"/"}>
            <p>Adress</p>
            <p>Lakeland FL</p>
          </Link>
        </div>

        <div className="contact-footer">
          <h2 className="footer-h2">Pages</h2>
          <Link to={"/commercial"}>
            <p>Commercial</p>
          </Link>
          <Link to={"/residential"}>
            <p>Residential</p>
          </Link>
          <Link to={"/about"}>
            <p>About</p>
          </Link>
          <Link to={"/contact"}>
            <p>Contact</p>
          </Link>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
