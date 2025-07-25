import React, { useRef } from "react";
import "./contact.scss";
import { delay, motion, useInView } from "framer-motion";
const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    tranistion: {
      delay: 0.5,
      duration: 2,
      staggerChildren: 0.1,
    },
  },
};

export default function Contact() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial={"initial"}
      whileInView={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's Work Together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>hello@react.dev</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>hello street, NY</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+1 (232) 321-1425</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            width={"100%"}
            height={"100%"}
            xmlns="http://www.w3.org/2000/svg"
            stroke="orange"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <motion.path
                d="M14 2C14 2 16.2 2.2 19 5C21.8 7.8 22 10 22 10"
                stroke="orange"
                strokeWidth="1"
                strokeLinecap="round"
                initial={{
                  pathLength: 0,
                }}
                animate={
                  isInView === true ? { pathLength: 1 } : { pathLength: 0 }
                }
                tranistion={{ duration: 3 }}
              ></motion.path>{" "}
              <path
                d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829"
                stroke="orange"
                strokeWidth="1"
                strokeLinecap="round"
                initial={{
                  pathLength: 0,
                }}
                animate={
                  isInView === true ? { pathLength: 1 } : { pathLength: 0 }
                }
                tranistion={{ duration: 3 }}
              ></path>{" "}
              <path
                d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
                stroke="orange"
                strokeWidth="1"
                strokeLinecap="round"
                initial={{
                  pathLength: 0,
                }}
                animate={
                  isInView === true ? { pathLength: 1 } : { pathLength: 0 }
                }
                tranistion={{ duration: 3 }}
              ></path>{" "}
            </g>
          </svg>
        </motion.div>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
          <textarea rows={8} required placeholder="Message"></textarea>
          <button>Send</button>
        </motion.form>
      </div>
    </motion.div>
  );
}
