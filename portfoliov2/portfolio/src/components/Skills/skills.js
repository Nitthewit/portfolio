import React from "react";
import "./skills.css";
import WebDesign from "../../assets/website-design.png";
import DSA from "../../assets/DSA2.png";
import DBA from "../../assets/DBA.png";
import Debug from "../../assets/Debug.png";
import API from "../../assets/API.png";
import IC1 from "../../assets/icons/icon1.png";
import IC2 from "../../assets/icons/icon2.png";
import IC3 from "../../assets/icons/icon3.png";
import IC4 from "../../assets/icons/icon4.png";
import IC5 from "../../assets/icons/icon5.png";
import IC6 from "../../assets/icons/icon6.png";
import IC7 from "../../assets/icons/ic7.png";
import IC8 from "../../assets/icons/ic8.png";
import IC9 from "../../assets/icons/ic9.png";
import IC10 from "../../assets/icons/icon10.png";
import IC11 from "../../assets/icons/icon11.png";
import IC12 from "../../assets/icons/icon12.png";

const Skillss = () => {
  return (
    <div>
      <section id="skills">
      <div id = "aboutmelink"></div>
        <span className="about">About Me</span>
        <span className="skillDesc">
          I am a dedicated IT and Software Engineering enthusiast with a
          specific passion for Artificial Intelligence. My journey is
          characterized by relentless learning, adaptability to emerging
          technologies, and a drive to face challenges head-on. While my résumé
          may not yet overflow with accolades, my commitment lies in
          continuously refining my skills. As I navigate this ever-evolving
          landscape, I eagerly anticipate collaborations and opportunities that
          underscore my expertise and fuel my zeal for innovation in the realms
          of IT and AI.
        </span>
        <div id = "skillslink"></div>
        <span className="skillTitle">Skills</span>
        <div className="skillBars">
          <div className="skillBar">
            <img src={WebDesign} alt="" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Web Development</h2>
              <p>
                Familiarity with web technologies like HTML, CSS, JavaScript,
                and frameworks/libraries such as React, Angular, and Vue.js.
              </p>
            </div>
          </div>
        </div>
        <div className="skillBars">
          <div className="skillBar">
            <img src={DSA} alt="" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Data Structures and Algorithms</h2>
              <p>
                Stong understanding of lists, trees, graphs, stacks, queues,
                sorting, and searching algorithms.
              </p>
            </div>
          </div>
        </div>
        <div className="skillBars">
          <div className="skillBar">
            <img src={DBA} alt="WebDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Database Management</h2>
              <p>
                Understanding of database design, SQL, and familiarity with
                popular database systems like MySQL, PostgreSQL, MongoDB, etc.
              </p>
            </div>
          </div>
        </div>
        <div className="skillBars">
          <div className="skillBar">
            <img src={Debug} alt="AppDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Testing and Debugging</h2>
              <p>
                Proficient in writing unit tests, debugging, and testing code,
                using tools such as Junit and jquery tests.
              </p>
            </div>
          </div>
        </div>
        <div className="skillBars">
          <div className="skillBar">
            <img src={API} alt="AppDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>API Development</h2>
              <p>
                Proficent in creating RESTful services, implementing GraphQL,
                and understanding authentication mechanisms like JWT and OAuth
              </p>
            </div>
          </div>
        </div>

        <span className="skillTitle">Languages</span>
      </section>
      <section className="skillsImages">
        <img src={IC1} alt="" className="skillImg" />
        <img src={IC2} alt="" className="skillImg" />
        <img src={IC3} alt="" className="skillImg" />
        <img src={IC4} alt="" className="skillImg" />
        <img src={IC5} alt="" className="skillImg" />
        <img src={IC6} alt="" className="skillImg" />
        <img src={IC7} alt="" className="skillImg" />
        <img src={IC8} alt="" className="skillImg" />
        <img src={IC9} alt="" className="skillImg" />
        <img src={IC10} alt="" className="skillImg" />
        <img src={IC11} alt="" className="skillImg" />
        <img src={IC12} alt="" className="skillImg" />
      </section>
    </div>
  );
};

export default Skillss;
