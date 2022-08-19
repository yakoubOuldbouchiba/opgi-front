import "./navBar.css";
import { useRef, useState } from "react";
import logo from "../../OPGI-BOUMERDES.png";
import { FaBars } from "react-icons/fa";
import { links } from "../../data/links";
import { NavLink, Link } from "react-router-dom";
const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="nav-bar-container">
      <div className="nav-bar">
        <div className="logo">
          <img src={logo} alt="logo opgi" className="logo-picture" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        <nav className={showLinks ? "nav nav-show" : "nav"}>
          <ul className="links">
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <NavLink
                    className={({ isActive }) => {
                      return isActive ? "active" : "";
                    }}
                    to={link.url}
                  >
                    {link.text}
                  </NavLink>
                </li>
              );
            })}
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className={showLinks ? "sigin sigin-show" : "sigin"}>
          <Link className="btn btn-sigin" to="/Login">
            connexion
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
