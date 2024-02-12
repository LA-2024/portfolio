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
                <span>L.<span>A</span></span>
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
                        <option value="de"><i class="fab fa-python"></i> Deutsch</option>
                        <option value="it"><i class="fab fa-java"></i> Italiano</option>
                        <option value="pt"><i class="fab fa-react"></i> Português</option>
                        <option value="ja"><i class="fab fa-angular"></i> 日本語</option>
                        <option value="ko"><i class="fab fa-vuejs"></i> 한국어</option>
                        <option value="zh"><i class="fab fa-node-js"></i> 中文</option>
                        <option value="ru"><i class="fab fa-php"></i> Русский</option>
                    </select>
                </div>
            </nav>
        </>
    )
}

export default Navbar