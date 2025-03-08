import './index.scss';
import Sidebar from '../Sidebar'
import{Outlet} from 'react-router-dom'
const Layout=()=>{
    return(
        <>
        <Sidebar />
        </>
    )
}

export default Layout;