import React from 'react'
import "../style/Sidebar.css"
import ImgLogo from "../assest/cloud-logo.svg"
import LogoutLogo from "../assest/logout-icon.svg"
import NavBarLinks from '../fragment/NavBarLinks'

const Sidebar = () => {
  return (
    <div
    className='sidebar-wrap'
    >
        <div className="logo-box">
            <figure className="img-box"><img src={ImgLogo} alt="" className="img" /></figure>
        </div>
        {/* end of logo-box */}
        <div className="nav-box">
            <NavBarLinks />
        </div>
        {/* end of list box */}
        <div className="logout-box">
        <figure className="img-box"><img src={LogoutLogo} alt="" className="img" /></figure>
        <p>Log out</p>
        </div>
    </div>
  )
}

export default Sidebar