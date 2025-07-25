import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    title: "Project Commerce",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, sed!",
    img: "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg",
  },
  {
    id: 2,
    title: "ReactJS APP",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, sed!",
    img: "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg",
  },
  {
    id: 3,
    title: "NextJS BlogPost",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, sed!",
    img: "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start, end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <>
      <section>
        <div className="container">
          <div className="wrapper">
            <motion.div className="imageContainer" ref={ref}>
              <motion.img src={item.img} alt="" srcset="" />
            </motion.div>
            <motion.div
              className="textContainer"
              style={{
                y,
              }}
            >
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <button>See Demo</button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default function Portfolio() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offeset: ["end end, start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          className="progressBar"
          style={{
            scaleX,
          }}
        ></motion.div>
      </div>
      {items.map((item) => {
        return <Single item={item} key={`${item.title}${item.id}`} />;
      })}
    </div>
  );
}
