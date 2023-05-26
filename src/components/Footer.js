import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="contact-footer">
          <Link to={"/"}>
            <h2>Contact</h2>
            <div>
              <p>Phone: (888) 888-8888</p>
              <p>Email: example@example.com</p>
            </div>
          </Link>
        </div>

        <div className="contact-footer">
          <Link to={"/"}>
            <h2>Location</h2>
            <div>
              <p>Adress</p>
              <p>Lakeland FL</p>
            </div>
          </Link>
        </div>

        <div className="contact-footer">

          <div>
            <Link to={"/commercial"}><li>Commercial</li></Link>
            <li>Residential</li>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
