import React from "react";
import { motion } from "framer-motion";
export default function ToggleButton({ setOpen }) {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="23"
        viewBox="0 0 23 23"
      >
        <motion.path
          strokeWidth={"3"}
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 4.5 L 20 4.5" },
            open: { d: "M 2 19.5 L 19 2.5" },
          }}
        />
        <motion.path
          strokeWidth={"3"}
          stroke="black"
          strokeLinecap="round"
          d={"M 2 12.423 L 20 12.423"}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth={"3"}
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: {
              d: "M 2 20.346 L 20 20.346",
            },
            open: {
              d: "M 2 2.5 L 19 19.5",
            },
          }}
        />
      </svg>
    </button>
  );
}
