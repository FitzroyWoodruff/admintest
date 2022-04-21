import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import BookIcon from '@mui/icons-material/Book';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom"


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
            <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">ADMIN</span>
                </Link>
                
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li><DashboardIcon className="icon"/><span>Dasboard</span></li>
                    <p className="title">LISTS</p>
                        <Link to="/users" style={{textDecoration:"none"}}>
                    <li><PersonIcon className="icon"/><span>Users</span></li>
                    </Link>
                    <Link to="/products" style={{textDecoration:"none"}}>
                        <li><InventoryIcon className="icon"/><span>Products</span></li>
                    </Link>
                    <li><ShoppingCartIcon className="icon"/><span>Orders</span></li>
                    <li><LocalShippingIcon className="icon"/><span>Delivery</span></li>
                    <p className="title">USEFUL</p>
                    <li><QueryStatsIcon className="icon"/><span>Stats</span></li>
                    <li><CircleNotificationsIcon className="icon"/><span>Notifications</span></li>
                    <p className="title">SERVICE</p>
                    <li><LocalHospitalIcon className="icon"/><span>System Health</span></li>
                    <li><BookIcon className="icon"/><span>Logs</span></li>
                    <li><SettingsIcon className="icon"/><span>Settings</span></li>
                    <p className="title">USER</p>
                    <li><AccountBoxIcon className="icon"/><span>Profile</span></li>
                    <li><LogoutIcon className="icon"/><span>Logout</span></li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>

            </div>
        </div>
    )
}

export default Sidebar