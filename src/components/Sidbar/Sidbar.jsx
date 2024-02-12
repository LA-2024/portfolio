import './Sidbar.scss'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Toggle from './Toggle'
import Items from './Items'


const variants = {
    open: {
        clipPath: 'circle(1500px at 50px 50px)',
        transition: {
            type: 'spring',
            stiffness: 200,
            damping: 20
        }
    },
    close: {
        clipPath: 'circle(20px at 40px 40px)',
        transition: {
            type: 'spring',
            stiffness: 200,
            damping: 20
        }
    }
}
const Sidbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <motion.div className='sidebar' animate={isOpen ? 'open' : 'close'} initial={{ open: false }} transition={{ duration: 0.5 }}>
            <motion.div className="bg" variants={variants}  >
                <Items setIsOpen={setIsOpen} isOpen={isOpen} />
            </motion.div>
            <Toggle setIsOpen={setIsOpen} isOpen={isOpen} />

        </motion.div >
    )
}


export default Sidbar