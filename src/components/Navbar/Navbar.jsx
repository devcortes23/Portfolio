import React, { useState, useEffect } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolling(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolling ? "scrolling" : ""}`}>
        <div className="container">
          {/* LOGO IMAGE */}
          <div className="logo" onClick={() => scrollTo("home")}>
            <img src="/logo.png" alt="Aniket Logo" />
          </div>

          {/* NAV LINKS */}
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <button onClick={() => scrollTo("about")}>About</button>
            <button onClick={() => scrollTo("skills")}>Skills</button>
            <button onClick={() => scrollTo("projects")}>Projects</button>
            <button onClick={() => scrollTo("resume")}>Resume</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>
          </div>

          {/* HAMBURGER */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="nav-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
