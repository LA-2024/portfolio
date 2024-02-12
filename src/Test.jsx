import { motion } from 'framer-motion'

function Test() {
    return (
        <motion.div className='course' animate={{ scale: 1.5, opacity: 1, x: 300 }} initial={{ x: -300 }} transition={{ duration: 10, delay: 1 }} drag whileInView={{ opacity: 1 }} dragConstraints={{ left: -300, right: 300, bottom: -300, top: 300 }} dragElastic={1}>
            <div className="box"></div>
        </motion.div>
    )
}

export default Test