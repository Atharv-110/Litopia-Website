import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

export default function Navbar() {
  const [clicked, setClicked] = useState("false");
  const handleClick = () => {
    if (clicked === "false") setClicked("true");
    else setClicked("false");
  };
  return (
    <div className="nav">
      <nav className="navbar">
        <h1>
        <Link
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="nav-item"
            >
              LITOPIA
            </Link>
        </h1>
        <div className="menu-icon" onClick={handleClick}>
          <i
            className={clicked === "true" ? "bx bx-x" : "bx bx-menu-alt-right"}
          ></i>
        </div>
        <ul className={clicked === "true" ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
              className="nav-item"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="event"
              spy={true}
              smooth={true}
              offset={-85}
              duration={500}
              className="nav-item"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="team"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
              className="nav-item"
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
              className="nav-item"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
