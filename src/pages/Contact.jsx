import React from "react";
// Import Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
// Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTelegramPlane,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
function Contact() {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <div className="contact">
        {/* Header */}
        <header>
          <h2>Get In Touch</h2>
        </header>
        {/* Phone - Email */}
        <div className="phone-email">
          <h3>
            Email:<span>thevkhaki@gmail.com</span>
          </h3>
          <h3>
            Phone:<span>09222937260</span>
          </h3>
        </div>
        {/* Form Contact */}
        <form
          className="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <input
            className="form-input"
            type="text"
            placeholder="Fullname"
            required
          />
          <input
            className="form-input"
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            className="form-input form-textarea"
            cols="50"
            rows="50"
            placeholder="Description"
            required
            style={{ fontFamily: "sans-serif" }}
          ></textarea>
          <button className="form-btn" type="submit">
            Send massage
          </button>
        </form>
        {/* Social-media */}
        <div className="contact-social">
          <ul>
            <li>
              <a
                href="https://www.instagram.com/amir._khaki/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/Amir_khakii"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTelegramPlane} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/TheVKhaki"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
