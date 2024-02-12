import { motion } from "framer-motion";

function Items({ setIsOpen, isOpen }) {
    const links = ['Home Page', 'About Us', 'Services', 'Projects', 'Contact Us'];

    const variants = {
        open: {
            transition: {
                staggerChildren: 0.1,
            },
        },
        closed: {
            transition: {
                staggerChildren: 0.1,
                staggerDirection: -1,
            },
        },
    };

    const linksVariants = {
        open: {
            y: 0,
            opacity: 1,
        },
        closed: {
            y: 50,
            opacity: 0,
        },
    };


    return (
        <motion.div className='items' variants={variants} >
            {links.map((link, index) => (
                <motion.a key={index} href={'#' + link} variants={linksVariants} onClick={() => setIsOpen(prev => !prev)}      >
                    {link}
                </motion.a>
            ))
            }
        </motion.div >
    );
}

export default Items;
