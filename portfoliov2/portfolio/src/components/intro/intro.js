import React from "react";
import "./intro.css";
import bg from "../../assets/nithin.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">
          I'm <span className="introName">Nithin</span> <br />A Full Stack
          Developer
        </span>
        <p className="introPara">
          I am a dedicated IT/SWE enthusiast with a passion for AI, <br></br>
          continuously expanding my skills and embracing new<br></br>{" "}
          technologies. Eager to collaborate on new innovative projects.
        </p>
        <Link to="contactslink" spy={true} smooth={true}>
          <button className="btn">
            <img src={btnImg} className="btnImg" alt="Hire" />
            Hire
          </button>
        </Link>
      </div>
      <img src={bg} className="bg" alt="Profile" />
    </section>
  );
};

export default Intro;
