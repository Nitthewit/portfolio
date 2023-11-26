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
          smooth={true}
        >
          Home
        </Link>
        <Link
          className="desktopMenuListItem"
          activeClass="active"
          to="aboutmelink"
          spy={true}
          smooth={true}
        >
          About
        </Link>
        <Link
          className="desktopMenuListItem"
          activeClass="active"
          to="skillslink"
          spy={true}
          smooth={true}
        >
          Skills
        </Link>
        <Link
          className="desktopMenuListItem"
          activeClass="active"
          to="experiencelink"
          spy={true}
          smooth={true}
        >
          Experience
        </Link>
      </div>
      <Link to="contactslink" spy={true} smooth={true}>
        <button className="desktopMenuBtn">
          <img src={contactImg} alt="" className="desktopMenuImg" />
          Contact Me
        </button>
      </Link>
    </nav>
  );
};

export default NavigationBar;
