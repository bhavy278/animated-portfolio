import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/sidebar";
function Navbar() {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          transition={{ duration: 1 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
        >
          Bhavy Patel
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="facebook.png" alt="facebook" />
          </a>
          <a href="#">
            <img src="instagram.png" alt="instagram" />
          </a>
          <a href="#">
            <img src="youtube.png" alt="youtube" />
          </a>
          <a href="#">
            <img src="dribbble.png" alt="dribbble" />
          </a>
        </div>
      </div>
      Navbar
    </div>
  );
}

export default Navbar;
