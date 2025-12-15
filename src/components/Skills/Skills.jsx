import React from "react";
import "./Skills.css";

const skills = [
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Bootstrap", category: "Frontend" },
  { name: "JavaScript", category: "Frontend / Programming" },
  { name: "Java", category: "Programming" },
  { name: "MERN Stack", category: "Full Stack" },
  { name: "QA Basics", category: "Tools" },
  { name: "Git/GitHub", category: "Tools" },
  { name: "Postman / APIs", category: "Tools" },
  { name: "Responsive Design", category: "Frontend" },
];

const Skills = () => {
  return (
    <div className="skills-section" id="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill.name}</h3>
            <p>{skill.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
