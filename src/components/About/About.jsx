import React from "react";
import "./About.css";
import pic from "../../assets/pic.png";



const About = () => {
  return (
    <div className="about-section" id="about">
      <h2>About Me</h2>
      <div className="about-content">
        {/* Left Image */}
        <div className="about-image">
          <img src={pic} alt="Aniket Jha" />
        </div>

        {/* Right Text */}
        <div className="about-text">
          <p>
            I’m <strong>Aniket Jha</strong>, a B.Sc IT graduate and MERN stack
            developer with a passion for building dynamic web applications. I
            specialize in frontend & backend development and responsive UI. I
            love creating projects that solve real-world problems.
          </p>

          <h3>Education</h3>
          <p>Secured 1st rank in B.Sc IT (2022–2025) with 9.32 CGPA.</p>

          <h3>Achievements</h3>
          <ul>
            <li>1st Rank in B.Sc IT (Academic Excellence)</li>
            <li>MERN Stack Project Recognition: ShopKart</li>
          </ul>

          <h3>Interests</h3>
          <p>
            Experimenting with UI/UX design, learning new technologies, and
            building fun projects in free time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
