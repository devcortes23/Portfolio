import React from "react";
import "./Home.css";
import pic from "../../assets/pic.png";
import Lottie from "lottie-react";
import developerAnimation from "../../assets/animations/developer animation.json";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        {/* Left text section */}
        <div className="home-text">
          <h1>
            Hi, I’m Aniket Jha —{" "}
            <span> MERN Stack Developer & QA Enthusiast</span>.
          </h1>
          <p>
            B.Sc IT graduate (2025) with strong <b>FRONTEND</b> skills,{" "}
            <b>MERN stack</b> experience, and real project exposure. Passionate
            about building fast, clean, and user-focused web apps.
          </p>
          <div className="home-buttons">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Right image section */}
        <div className="home-right">
          <Lottie
            animationData={developerAnimation}
            loop={true}
            className="hero-animation"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
