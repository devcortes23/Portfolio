import React from "react";
import "./Projects.css";
import { FaShoppingCart, FaUtensils, FaUserCircle } from "react-icons/fa";

const projects = [
  {
    name: "ShopKart",
    description:
      "MERN stack e-commerce project featuring a fully functional shopping cart, user authentication with JWT, product listing, search & filter, and responsive design using Tailwind CSS. Secure login, dynamic cart updates, and smooth UI transitions make this project production-ready.",
    icon: <FaShoppingCart />,
    demo: "#",
    code: "https://github.com/aniketjha437/ShopKart-An-Ecommerce-Website",
  },
  {
    name: "Food Delivery App",
    description:
      "Ongoing React + Node.js project for online food ordering. Features include real-time cart, order tracking, user authentication, menu filtering, and responsive design. Aims to provide seamless UX for both customers and restaurant owners.",
    icon: <FaUtensils />,
    demo: "#",
    code: "https://github.com/yourusername/FoodDelivery",
  },
  {
    name: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects, skills, and achievements. Includes interactive project cards, smooth animations, responsive layout, and integrated contact form. Built to present work professionally with modern UI/UX design.",
    icon: <FaUserCircle />,
    demo: "https://aniketjha.vercel.app/",
    code: "https://github.com/aniketjha437/Portfolio",
  },
];

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-header">
              <span className="project-icon">{project.icon}</span>
              <h3>{project.name}</h3>
            </div>
            <p>{project.description}</p>
            <div className="project-buttons">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <button>Live Demo</button>
              </a>
              <a href={project.code} target="_blank" rel="noopener noreferrer">
                <button className="code-btn">View Code</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
