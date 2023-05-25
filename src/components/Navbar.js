import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    
      <nav className="nav-container">
      <Logo />
        <ul>
          <li>
            <Link className="nav-link" to={"/"}>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={"/residential"}>
              <span>Residential</span>
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={"/commercial"}>
              <span>Commercial</span>
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={"/about"}>
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={"/contact"}>
              <span>Contact</span>
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={"/auth/signup"}>
              <span>Sign up</span>
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={"/auth/login"}>
              <span>Login</span>
            </Link>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
