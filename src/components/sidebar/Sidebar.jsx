import { motion } from "framer-motion";
import React, { useState } from "react";
import Links from "./Links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";
const variants = {
  open: {
    clipPath: `circle(1200px at 50px 50px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      damping: 10,
    },
  },
  closed: {
    clipPath: `circle(20px at 50px 50px)`,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
}
