import React from "react";
//Import Components
import Navigation from "./Navigation";
import Logo from "./LogoInNav";
// Import Image
import V from "../img/V.png";
// Import Animation
import { motion } from "framer-motion";
import { khaki, menu } from "../animation";
//Import Router
import { Link, useLocation } from "react-router-dom";
function Nav() {
  const { pathname } = useLocation();

  return (
    <div id="nav">
      {/* THEVKHAKI */}
      <motion.div variants={khaki} initial="hidden" animate="show" id="khaki">
        <h1>The</h1>
        <span>
          <img src={V} alt="Vlone" />
        </span>
        <h1>Khaki</h1>
      </motion.div>
      <header className="home-head">
        {/* LOGO */}
        <Logo />
        {/* NAv */}
        <nav>
          <motion.ul variants={menu} initial="hidden" animate="show">
            <li className={`${pathname === "/" ? "active" : ""}`}>
              <Link to="/">Home</Link>
            </li>
            <li className={`${pathname === "/projects" ? "active" : ""}`}>
              <Link to="/projects">Projects</Link>
            </li>
            <li className={`${pathname === "/contact" ? "active" : ""}`}>
              <Link to="/contact">Contact</Link>
            </li>
          </motion.ul>
          {/* NAV in Moblie */}
          <Navigation />
        </nav>
      </header>
    </div>
  );
}

export default Nav;
