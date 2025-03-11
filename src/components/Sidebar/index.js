import './index.scss';
import { Link, NavLink } from 'react-router-dom'
// import LogoS from '../../assets/images/logo.png'
// import LogoSubtitle from '../../assets/images/logo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar=()=> (
    <div className = "nav-bar">
        <Link className="logo" to="/">
            
            {/* <img src={LogoS} alt="logo" />
            <img className = "sub-logo" src={LogoSubtitle} alt = "derekwang" /> */}
            
        </Link>
        <nav>
            <NavLink exact = "true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact = "true" activeclassname="active" className = "about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact = "true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faEnvelope} className = "contact-link"color="#4d4d4e" to = "/contact"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target = "_blank" rel='noreferrer' href="https://www.linkedin.com/in/4derekwang/">
                    <FontAwesomeIcon icon = {faLinkedin} color="#4d4d4e" />

                </a>
            </li>
            <li>
                <a target = "_blank" rel='noreferrer' href="https://github.com/4ppleSA0CE">
                    <FontAwesomeIcon icon = {faGithub} color="#4d4d4e" />

                </a>
            </li>
            <li>
                <a target = "_blank" rel='noreferrer' href="https://www.instagram.com/derekwank/">
                    <FontAwesomeIcon icon = {faInstagram} color="#4d4d4e" />

                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar