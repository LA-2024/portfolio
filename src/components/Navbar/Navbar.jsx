import Sidbar from '../Sidbar/Sidbar'
import { useTranslation } from 'react-i18next'
import './Navbar.scss';

function Navbar() {
    const [t, i18n] = useTranslation('global')
    const handlChangeL = (lng) => {
        i18n.changeLanguage(lng)
    }
    return (
        <>
            <Sidbar />
            <nav>
                <div className="logo">
                    <img src="./la.png" alt="logo" />
                </div>
                <div className="socioals">
                    <a href="https://www.facebook.com/paralex.la" target="_blank" rel="noreferrer"> <i className="fab fa-facebook-f"></i> </a>
                    <a href="https://www.instagram.com/paralex.la/" target="_blank" rel="noreferrer"> <i className="fab fa-instagram"></i> </a>
                    <a href="https://www.linkedin.com/company/paralex-la" target="_blank" rel="noreferrer"> <i className="fab fa-linkedin-in"></i> </a>
                    <a href="https://www.youtube.com/channel/UCk3-853116-17-23" target="_blank" rel="noreferrer"> <i className="fab fa-youtube"></i> </a>
                    <select onChange={(e) => {
                        handlChangeL(e.currentTarget.value)
                    }}>
                        <option value="en"><i class="fab fa-html5"></i> English</option>
                        <option value="fr"><i class="fab fa-css3"></i> Français</option>
                        <option value="es"><i class="fab fa-js"></i> Español</option>
                    </select>
                </div>
            </nav>
        </>
    )
}

export default Navbar