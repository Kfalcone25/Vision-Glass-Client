import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useContext } from "react";

import { AuthContext } from "../context/auth.context";

const Navbar = () => {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

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
      </ul>
    </nav>
  );
};

export default Navbar;
