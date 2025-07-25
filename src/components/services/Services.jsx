import React, { useRef } from "react";
import "./services.scss";
import { animate, motion, stagger, useInView } from "framer-motion";

const doList = [
  {
    id: 1,
    title: "Branding",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ab
            nemo reiciendis dolorum, eligendi error placeat neque voluptatum,
            temporibus aperiam natus sit consequuntur, unde mollitia iure totam
            quisquam at! In.`,
    button: "Go",
  },
  {
    id: 2,
    title: "Branding",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ab
            nemo reiciendis dolorum, eligendi error placeat neque voluptatum,
            temporibus aperiam natus sit consequuntur, unde mollitia iure totam
            quisquam at! In.`,
    button: "Go",
  },
  {
    id: 3,
    title: "Branding",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ab
            nemo reiciendis dolorum, eligendi error placeat neque voluptatum,
            temporibus aperiam natus sit consequuntur, unde mollitia iure totam
            quisquam at! In.`,
    button: "Go",
  },
  {
    id: 4,
    title: "Branding",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ab
            nemo reiciendis dolorum, eligendi error placeat neque voluptatum,
            temporibus aperiam natus sit consequuntur, unde mollitia iure totam
            quisquam at! In.`,
    button: "Go",
  },
];

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
};
export default function Services() {
  const ref = useRef();
  const isInView = useInView(ref, {
    margin: "100px",
  });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial={"initial"}
      animate={isInView && "animate"}
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.p>
          I focus on helping your brand grow <br /> and move forward
        </motion.p>
        <hr />
      </motion.div>
      <motion.div
        className="titleContainer"
        variants={variants}
        initial={"initial"}
        animate={"animate"}
      >
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b
              whileHover={{
                color: "orange",
              }}
            >
              Unique{" "}
            </motion.b>
            Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b
              whileHover={{
                color: "orange",
              }}
            >
              For Your{" "}
            </motion.b>
            Business
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>

      <motion.div
        className="listContainer"
        variants={variants}
        initial={"initial"}
        whileInView={"animate"}
      >
        {doList.map((item) => {
          return (
            <motion.div
              className="box"
              whileHover={{
                transition: "1s",
                backgroundColor: "lightgray",
                color: "black",
              }}
              key={`${item.title}${item.id}`}
            >
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>{item.button}</button>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
