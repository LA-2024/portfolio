import { useEffect, useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const [t, i18n] = useTranslation('global')
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    console.log(formRef.current)
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vtmggml",
        "template_7tur08j",
        formRef.current,
        "zAgI4BYczgMF73AqL"
      )
      .then((result) => {
        setSuccess(true)
      }, (error) => {
        setError(true)
      })
  };


  useEffect(() => {
    const rsetES = setTimeout(() => {
      setSuccess(false)
      setError(false)
      return () => {
        clearInterval(rsetES);
      }
    }, 3000)
  }, [error, success])

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
      id="contactme"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>{t('contact.title')}</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>{t('contact.mail')}</h2>
          <span>abderrazzaqlaouni@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>{t('contact.address')}</h2>
          <span>Safi - dar boaawda</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>{t('contact.phone')}</h2>
          <span>+212617934100</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg width="450px" height="450px" viewBox="0 0 512 512">
            <motion.path
              strokeWidth={5}
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }} d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
          </svg>
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button>Submit</button>
          {error && <div class="check">
            <i class="far fa-check-circle color"></i> &nbsp; &nbsp;
            <span>Nailed It!</span>
          </div>}
          {success && <div class="check">
            <i class="far fa-check-circle color"></i> &nbsp; &nbsp;
            <span>Nailed It!</span>
          </div>}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
