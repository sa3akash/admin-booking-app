import "./sidebar.scss"
import {Dashboard, Group, Inventory2, LocalShipping, LocationCity, Logout, ManageAccounts, NotificationsNone, Psychology, Settings, SettingsSystemDaydream} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to='/'><span className="logo">SA2Admin</span></Link>
      </div>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to='/'><li><Dashboard className="icon"/><span>Dashboard</span></li></Link>
          <p className="title">LIST</p>
          <Link to='/users'><li><Group className="icon"/><span>Users</span></li></Link>
          <Link to='/products'><li><Inventory2 className="icon"/><span>Products</span></li></Link>
          <li><LocalShipping className="icon"/><span>Delivery</span></li>
          <p className="title">USEFUL</p>
          <li><LocationCity className="icon"/><span>Stats</span></li>
          <li><NotificationsNone className="icon"/><span>Notifications</span></li>
          <p className="title">SERVICE</p>
          <li><SettingsSystemDaydream className="icon"/><span>System Health</span></li>
          <li><Psychology className="icon"/><span>Logs</span></li>
          <li><Settings className="icon"/><span>Settings</span></li>
          <p className="title">USER</p>
          <li><ManageAccounts className="icon"/><span>Profile</span></li>
          <li><Logout className="icon"/><span>Logout</span></li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  )
}

export default Sidebar