import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";

const items = [
  {
    id: 1,
    title: 't(projects.p1.title)',
    img: "https://firebasestorage.googleapis.com/v0/b/mern-real-estat.appspot.com/o/connect.png?alt=media&token=832ec7cd-ff93-46d7-8198-0bc5b60e6fca",
    desc: 't(projects.p1.desc)',
  },
  {
    id: 2,
    title: 't(projects.p2.title)',
    img: "https://firebasestorage.googleapis.com/v0/b/mern-real-estat.appspot.com/o/blog.png?alt=media&token=dc13b001-c4c8-45b9-b4d9-143d87c993b9",
    desc: 't(projects.p2.desc)',
  },
  {
    id: 3,
    title: 't(projects.p3.title)',
    img: "https://firebasestorage.googleapis.com/v0/b/mern-real-estat.appspot.com/o/multivendur.png?alt=media&token=94df57ee-046b-4b10-a630-c6db6ad47dad",
    desc: 't(projects.p3.desc)',
  },
  {
    id: 4,
    title: 't(projects.p4.title)',
    img: "https://firebasestorage.googleapis.com/v0/b/mern-real-estat.appspot.com/o/portofolio.png?alt=media&token=3e00fb03-2eca-4f14-b473-16c130fe7882",
    desc: 't(projects.p4.desc)',
  },
];

const Single = ({ item, id }) => {
  const ref = useRef();
  const [t, i18n] = useTranslation('global')

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{t(`projects.p${id}.title`)}</h2>
            <p>{t(`projects.p${id}.desc`)}</p>
            <button>{t(`projects.p${id}.btn`)}</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [t, i18n] = useTranslation('global')
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} id={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
