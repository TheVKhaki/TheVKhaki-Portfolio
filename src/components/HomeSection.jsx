import React from "react";
// Import Image
import imgHome from "../img/img-home.jpg";
import V from "../img/V.png";
//Import Animation
import { motion } from "framer-motion";
import {
  imgBox,
  letter1,
  letter2,
  letter3,
  letter4,
  letter1tablet,
  letter2tablet,
  letter3tablet,
  letter4tablet,
  letter5tablet,
  letter5,
  circle1,
  circle2,
  circle3,
  homeText,
} from "../animation";
//Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTelegramPlane,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
const HomeSection = () => {
  return (
    <div>
      <section className="home">
        <div className="home-img">
          <motion.div variants={imgBox} className="box"></motion.div>
          <div>
            <img src={imgHome} alt="Amir Khakbaz" />
          </div>
        </div>
        {/* circle */}
        <motion.div variants={circle1} className="circle-shape"></motion.div>
        <motion.div variants={circle2} className="circle-shape-2"></motion.div>
        <motion.div variants={circle3} className="circle-shape-3"></motion.div>
        {/* KHAKI in Desktop */}
        <div className="letters">
          <motion.div variants={letter1} className="letter-1 letter">
            K
          </motion.div>
          <motion.div variants={letter2} className="letter-2 letter">
            H
          </motion.div>
          <motion.div variants={letter3} className="letter-3 letter">
            A
          </motion.div>
          <motion.div variants={letter4} className="letter-4 letter">
            K
          </motion.div>
          <motion.div variants={letter5} className="letter-5 letter">
            I
          </motion.div>
        </div>
        {/* KHAKI in Tablet */}
        <div className="letters-tablet">
          <motion.div variants={letter1tablet} className="letter-1 letter">
            K
          </motion.div>
          <motion.div variants={letter2tablet} className="letter-2 letter">
            H
          </motion.div>
          <motion.div variants={letter3tablet} className="letter-3 letter">
            A
          </motion.div>
          <motion.div variants={letter4tablet} className="letter-4 letter">
            K
          </motion.div>
          <motion.div variants={letter5tablet} className="letter-5 letter">
            I
          </motion.div>
        </div>
        <motion.div variants={homeText} className="home-text ">
          <h1>Amir Khakbaz</h1>
          <h2>
            Front-End <br /> Web Developer
          </h2>
          <p>
            Hi! My name is Amir Khakbaz junior front-end developer from
            Iran,Tehran My love of beautiful websites , write code and curiosity
            made me discover and explore Web development
            <br /> Some of the technologies I've worked with are HTML & CSS,
            JavaScript (ES6+) and React.
          </p>
          {/* Social-media*/}
          <div className="home-social">
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
          {/* THEVKHAKI in Mobile */}
          <div id="khaki-mobile">
            <h1>The</h1>
            <span>
              <img src={V} alt="Vlone" />
            </span>
            <h1>Khaki</h1>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomeSection;
