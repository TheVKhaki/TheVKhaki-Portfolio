import React, { useState, useEffect } from "react";
// Import Image
import menuHome from "../img/menu-img-home.png";
import menuProjects from "../img/menu-img-projects.png";
import menuContact from "../img/menu-img-contact.png";
// Import Router
import { Link, useHistory } from "react-router-dom";
function Navigation() {
  // Slide Menu
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();
  const url = history.location.pathname;
  // Menu Open
  function MenuOpen() {
    const fullScreen = document.querySelector(".fullscreen");
    setShowMenu(true);
    fullScreen.classList.add("active");
  }
  // Menu Close
  function MenuClose() {
    const fullScreen = document.querySelector(".fullscreen");
    setShowMenu(false);
    if (showMenu) {
      fullScreen.classList.remove("active");
    }
  }
  // For Change URL TO Menu close
  useEffect(() => {
    const fullScreen = document.querySelector(".fullscreen");
    fullScreen.classList.remove("active");
  }, [url]);
  return (
    <div>
      <div className="menu-open" onClick={MenuOpen}>
        Menu
      </div>
      <div className="fullscreen">
        <div className="menu-close" onClick={MenuClose}>
          Close
        </div>
        <div className="menu">
          {/* Home Page */}
          <div className="menu-item">
            <Link to="/" className="menu-item-link">
              Home
            </Link>
            <img src={menuHome} alt="Home Page" className="menu-item-img" />
            <div className="multi">
              <div className="multi-inner">
                <span>
                  Home - Home - Home - Home - Home - Home - Home - Home - Home -
                  Home
                </span>
              </div>
            </div>
          </div>
          {/* Projects Page */}
          <div className="menu-item">
            <Link to="/projects" className="menu-item-link">
              Projects
            </Link>
            <img
              src={menuProjects}
              alt="Projects Page"
              className="menu-item-img"
            />
            <div className="multi">
              <div className="multi-inner">
                <span>
                  Projects - Projects - Projects - Projects - Projects -
                  Projects - Projects{" "}
                </span>
              </div>
            </div>
          </div>
          {/* Contact Page */}
          <div className="menu-item">
            <Link to="/contact" className="menu-item-link">
              Contact
            </Link>
            <img
              src={menuContact}
              alt="Contact Page"
              className="menu-item-img"
            />
            <div className="multi">
              <div className="multi-inner">
                <span>
                  Contact - Contact - Contact - Contact - Contact - Contact -
                  Contact{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
