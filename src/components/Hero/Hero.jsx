import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import './hero.scss'
const contentVariants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,

        }
    }
}

function Hero() {
    // translation
    const [t, i18n] = useTranslation('global')
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="content" variants={contentVariants} initial="initial" animate="animate">
                    <motion.h2 variants={contentVariants}>Laouni Abderrazzaq</motion.h2>
                    <motion.h1 variants={contentVariants}>Web developer <br />and UI designer</motion.h1>
                    <motion.div className="btns" variants={contentVariants}>
                        <a href='#Projects' >{t('home.hero.btn1')}</a>
                        <a href='#contactme' >{t('home.hero.btn2')}</a>
                    </motion.div>
                    <motion.div animate={{ translateY: 40, opacity: 0 }} initial={{ translateY: 0, opacity: 1 }} transition={{ repeatDelay: 1, duration: 3, repeat: Infinity }} className="heart">
                        <i className="fas fa-mouse"></i>
                    </motion.div>
                </motion.div>
                <img src="./hero.png" alt="" className='imageWrapper' />
            </div>
        </div >
    );
}

export default Hero