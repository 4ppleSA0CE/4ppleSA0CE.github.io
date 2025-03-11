import { Link } from 'react-router-dom';
import './index.scss';
const Home = () => {

    return(
        <div className="container home-page">
            <div className = "text-zone"> 
                <h1>Hi, <br /> I'm Derek Wang</h1>
                <Link to="/contact" className ='flat-button'>Contact me</Link>
            </div>

        </div>
    )
}

export default Home