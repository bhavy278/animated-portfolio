import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0.5,
    y: 10,
    transition: {
      delay: 1.5,
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const slidingTextVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",

    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};
export default function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial={"initial"}
          animate={"animate"}
        >
          <motion.h2 variants={textVariants}>Bhavy Patel</motion.h2>
          <motion.h1 variants={textVariants}>Fullstack Web Developer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt="scroll"
            variants={textVariants}
            animate={"scrollButton"}
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={slidingTextVariants}
        initial={"initial"}
        animate={"animate"}
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="hero" />
      </div>
    </div>
  );
}
