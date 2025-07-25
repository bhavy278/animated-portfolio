import { motion } from "framer-motion";
import React from "react";

const items = ["Home", "Services", "Portfolio", "Contact"];

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
export default function Links() {
  return (
    <motion.div variants={variants} className="links">
      {items.map((item, index) => (
        <motion.a
          variants={itemVariants}
          href={`#${item}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          key={item}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
}
