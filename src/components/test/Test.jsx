import React from "react";
import { motion } from "framer-motion";
function Test() {
  return (
    <div className="course">
      <motion.div
        className="box"
        transition={{
          duration: 5,

          repeat: Infinity,
          repeatType: "reverse",
        }}
        whileInView={{
          scale: 1.2,
          rotate: 360,
          transition: {
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      ></motion.div>
    </div>
  );
}

export default Test;
