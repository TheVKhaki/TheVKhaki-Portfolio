import React from "react";
// Import Image
import escape1 from "../img/Escape-1.jpg";
import modernDesign1 from "../img/Modern-Design-1.jpg";
import blade1 from "../img/Blade-1.jpg";
// Import Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
// Import Router
import { Link } from "react-router-dom";
function Projects() {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <section className="projects">
        {/* ESCAPE */}
        <div className="project">
          <h2>Escape</h2>
          <div className="line"></div>
          <Link to="/projects/escape">
            <span>See Project</span>
            <img src={escape1} alt="Escape Responsive Website Travel Agency" />
          </Link>
        </div>
        {/* Modern Design */}
        <div className="project">
          <h2>Modern Design</h2>
          <div className="line"></div>
          <Link to="/projects/modern-design">
            <span>See Project</span>
            <img
              src={modernDesign1}
              alt="Modern Design Responsive Website For Interior Architecture"
            />
          </Link>
        </div>
        {/* Blade */}
        <div className="project">
          <h2>Blade</h2>
          <div className="line"></div>
          <Link to="/projects/blade">
            <span>See Project</span>
            <img src={blade1} alt="Blade Responsive Website For Barbershop" />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}

export default Projects;
