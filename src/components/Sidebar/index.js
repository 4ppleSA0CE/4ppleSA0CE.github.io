import './index.scss';
import { Link } from 'react-router-dom'
// import Logo from '../../assets/images/logo.png'
// import Logosub from '../../assets/images/logo-sub.png'

const Sidebar=()=> (
    <div className = "nav-bar">
        <Link className="logo" to="/">
            
            {/* <img src={Logo} alt="logo" />
            <img src={Logosub} alt = "derekwang" /> */}
            
        </Link>
    </div>
)

export default Sidebar