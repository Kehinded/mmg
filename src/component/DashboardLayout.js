import React, {useContext} from "react";
import "../style/DashboardLayout.css";
import Sidebar from "./Sidebar";
import toggleIcon from "../assest/menu-icon.svg"
import mobileLogo from "../assest/mobile-logo.svg"
import ControlContext from "../store/ContextControl"

const DashboardLayout = ({ children }) => {
    const ctrCtx = useContext(ControlContext)
  return (
    <div className="dashboard-wrapper">
        
      <div className={`sidebar-box ${ctrCtx.isSidebarOpen && "translateX"}`}>
          <Sidebar />
      </div>
      <div className="main-content-box">
      <div className="toggle-wrap">
              <figure onClick={() => ctrCtx.sideBarToggleFunc("any")} className="toggle-box"><img src={toggleIcon} alt="" className="img" /></figure>
              <figure className="logo-box"><img src={mobileLogo} alt="" className="img" /></figure>
          </div>
          {children}
          </div>
    </div>
  );
};

export default DashboardLayout;
