import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import contactImg from "../../assets/contact.png";
import { Link } from "react-scroll";
const NavigationBar = () => {
  return (
    <nav className="navbar">
      <img src={logo} className="logo" alt="logo" />
      <div className="desktopMenu">
        <Link
          className="desktopMenuListItem"
          activeClass="active"
          to="intro"
          spy={true}
          offset={-50}
          smooth={true}
          duration={500}
        >
          Home
        </Link>
        <Link
          className="desktopMenuListItem"
          activeClass="active"
          to="aboutme"
          spy={true}
          offset={-50}
          smooth={true}
          duration={500}
        >
          About
        </Link>
        <Link
          className="desktopMenuListItem"
          activeClass="active"
          to="skills"
          spy={true}
          offset={-50}
          smooth={true}
          duration={500}
        >
          Skills
        </Link>
        <Link
          className="desktopMenuListItem"
          activeClass="active"
          to="Experience"
          spy={true}
          offset={-50}
          smooth={true}
          duration={500}
        >
          Experience
        </Link>
      </div>
      <Link
        activeClass="active"
        to="Contactslink"
        spy={true}
        offset={-50}
        smooth={true}
        duration={500}
      >
        <button className="desktopMenuBtn">
          <img src={contactImg} alt="" className="desktopMenuImg" />
          Contact Me
        </button>
      </Link>
    </nav>
  );
};

export default NavigationBar;
