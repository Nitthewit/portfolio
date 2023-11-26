import React from "react";
import "./experience.css";
import logo1 from "../../assets/wawa.png";
import logo2 from "../../assets/chip1.jpg";

const Experience = () => {
  return (
    <div className="Experience">
      <div id="Experiencetitle">Experience</div>

      {/* First Experience */}
      <div className="experience-box">
        <img src={logo1} alt="" id="logo" />

        <div id="company">Company - Wawa</div>
        <div id="position">Position - Full Stack Developer</div>
        <div id="duration">Duration - May 2023 - August 2023</div>

        <div id="description">
          <div id="description-title">Description</div>
          <div id="bullet-point">
            • Successfully optimized SQL and MongoDB queries, reducing execution
            times by ten folds, employing strategies like removing OR
            statements, sub-queries, and implementing indexing
          </div>
          <div id="bullet-point">
            • Utilized Git for repository management, including cloning,
            creating commits, and submitting pull requests
          </div>
          <div id="bullet-point">
            • Demonstrated proficiency in web development, including HTML,
            JavaScript, CSS, and React. Implemented bug fixes, error messages,
            retry buttons, and optimized API calls through the use of Chrome Dev
            tools
          </div>
          <div id="bullet-point">
            • Expanded website functionality to display additional data and
            efficiently refactored React components, converting class components
            into functional ones and breaking down large components into
            smaller, more manageable ones
          </div>
          <div id="bullet-point">
            • Resolved backend Python-MongoDB query issues, addressing timeout
            problems caused by syntax and casting challenges
          </div>
          <div id="bullet-point">
            •Conducted API testing using Postman, simulating loyalty calls by
            reading APIs and creating mock requests for validation
          </div>
          <div id="bullet-point">
            • Worked with Jira, Confluence, Office 365 applications, Github,
            Citrix, CodeFresh, AWS
          </div>
        </div>
      </div>

      {/* Second Experience */}
      <div className="experience-box">
        <img src={logo2} alt="" id="logo2" />
        <div id="company">Company - Chipotle</div>
        <div id="position">Position - Associate</div>
        <div id="duration">Duration - March 2022 - August 2022</div>

        <div id="description">
          <div id="description-title">Description</div>
          <div id="bullet-point">
            • Displayed effective communication and teamwork, allowing our crew
            to excel during rushes
          </div>
          <div id="bullet-point">
            • Trained new team members on food prep and safety procedures,
            improving their performance
          </div>
          <div id="bullet-point">
            • Volunteered for additional shifts to provide coverage when the
            store was understaffed
          </div>
          <div id="bullet-point">
            • Proposed ideas to manager to improve workflow and increase
            customer throughput
          </div>
          <div id="bullet-point">
            • Quickly mastered cash handling procedures and POS system with 100%
            accuracy
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
