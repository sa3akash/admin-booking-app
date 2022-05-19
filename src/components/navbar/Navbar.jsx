import "./navbar.scss"
import {ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationsOutlined, Search} from "@mui/icons-material"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..."/>
           <Search/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon"/>
            <span>English</span>
          </div>
          <div className="item">
            <DarkModeOutlined className="icon" />
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon" />
          </div>
          <div className="item">
            <NotificationsOutlined className="icon" />
            <div className="counter">4</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className="icon" />
            <div className="counter">9+</div>
          </div>
          <div className="item">
            <ListOutlined className="icon" />
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/11309593/pexels-photo-11309593.jpeg?cs=srgb&dl=pexels-agung-pandit-wiguna-11309593.jpg&fm=jpg" alt="" className="avater" />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar