import "./services.scss";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from 'react-i18next'

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });
  //translation
  const [t, i18n] = useTranslation('global')

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="./people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "rgb(0, 68, 255)" }}>{t('services.title.p1')}</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "rgb(0, 68, 255)" }}>{t('services.title.p2')}</motion.b>
          </h1>
          <button>{t('services.btn')}</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>{t('services.listContainer.box1.h2')}</h2>
          <p>
            {t('services.listContainer.box1.p')}
          </p>
          <button>{t('services.listContainer.box1.btn')}</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>{t('services.listContainer.box2.h2')}</h2>
          <p>
            {t('services.listContainer.box2.p')}
          </p>
          <button>{t('services.listContainer.box2.btn')}</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>{t('services.listContainer.box3.h2')}</h2>
          <p>
            {t('services.listContainer.box3.p')}
          </p>
          <button>{t('services.listContainer.box1.btn')}</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
