import { useState } from "react"



function Toggle({ setIsOpen, isOpen }) {
    return (
        <button className='toggle_btn' onClick={() => setIsOpen(prev => !prev)}>
            {isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </button>
    )
}

export default Toggle