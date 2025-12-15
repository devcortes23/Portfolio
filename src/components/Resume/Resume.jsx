import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-section" id="resume">
      <h2>My Resume</h2>

      {/* Education */}
      <div className="resume-card">
        <h3>Education</h3>
        <ul>
          <li>
            <strong>B.Sc IT (2022-2025)</strong> - <em>CGPA: 9.32 / 93%</em>
            <br />
            Top Performer, 1st Rank among 100+ students
          </li>
          <li>
            <strong>Intermediate (12th)</strong> - <em>Percentage: 92%</em>
            <br />
            XYZ College, Board Name
          </li>
          <li>
            <strong>High School (10th)</strong> - <em>Percentage: 95%</em>
            <br />
            ABC School, Board Name
          </li>
        </ul>
      </div>

      {/* Skills Summary */}
      <div className="resume-card">
        <h3>Skills</h3>
        <p>
          HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, Java, MERN Stack,
          Git/GitHub, QA Basics, Postman, Responsive Design
        </p>
      </div>

      {/* Projects Summary */}
      <div className="resume-card">
        <h3>Projects</h3>
        <ul>
          <li>
            <strong>ShopKart</strong> - MERN e-commerce project with JWT Auth,
            dynamic cart, responsive design
          </li>
          <li>
            <strong>Food Delivery App</strong> - React + Node.js platform with
            real-time orders and responsive UI (Ongoing)
          </li>
          <li>
            <strong>Portfolio Website</strong> - Personal portfolio with
            responsive design and interactive UI
          </li>
        </ul>
      </div>

      {/* Download Resume Button */}
      <div className="resume-download">
        <a href="/Aniket-Jha-Resume.pdf" download>
          <button>Download Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Resume;
