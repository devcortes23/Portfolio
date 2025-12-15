import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Resume from "./components/Resume/Resume.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Separator from "./components/Separator/Separator.jsx";

const App = () => {
  return (
<div className="bg-[#0b1220] text-[#e5e7eb] min-h-screen w-full overflow-x-hidden font-outfit">

      <Navbar />

      {/* Main content wrapper */}
      <div className="max-w-300 w-full mx-auto px-5">
        <Home />
        <Separator />

        <About />
        <Separator />

        <Skills />
        <Separator />

        <Projects />
        <Separator />

        <Resume />
        <Separator />

        <Contact />
      </div>
    </div>
  );
};

export default App;
