import { motion, useScroll, useTransform } from 'framer-motion'
import './Parallax.scss'
import { useRef } from 'react'

function Parallax({ type }) {
    const section = useRef()
    const { scrollYProgress } = useScroll({
        target: section,
        offset: ['start start', 'end start']
    })
    const sT = useTransform(scrollYProgress, [0, 1], ['0%', '300%'])
    const mT = useTransform(scrollYProgress, [0, 1], ['0%', '150%'])
    const suT = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

    return (
        <motion.div className="parallax" ref={section} transition={{ duration: 5 }} style={{ background: type == 'services' ? 'linear-gradient(180deg, #0c0c1d, #111132)' : 'linear-gradient(180deg, #0c0c1d, #ff22)' }}>
            <motion.h1 style={{ y: sT }} transition={{ duration: 5 }}>{type === 'services' ? 'Whta We Do' : 'What We Did'}</motion.h1>
            <motion.div style={{ x: mT }} transition={{ duration: 5 }} className="stars"></motion.div>
            <motion.div style={{ y: suT }} transition={{ duration: 5 }} className="moons"></motion.div>
            <motion.div style={{ y: suT }} transition={{ duration: 5 }} className="mountans"></motion.div>
        </motion.div>
    )
}

export default Parallax