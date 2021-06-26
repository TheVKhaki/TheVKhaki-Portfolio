import React from "react";
// Import Components
import HomeSection from "../components/HomeSection";
// Import Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
function Home() {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <HomeSection />
    </motion.div>
  );
}

export default Home;
