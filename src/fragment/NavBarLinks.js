import React, {useContext} from 'react'
import homeIcon from "../assest/home-icon.svg"
import SendIcon from "../assest/send-icon.svg"
import InvestIcon from "../assest/invest-icon.svg"
import loanIcon from "../assest/loan-icon.svg"
import transactionIcon from "../assest/transaction-icon.svg"
import cardIcon from "../assest/card-icon.svg"
import marketIcon from "../assest/market-icon.svg"
import settingIcon from "../assest/setting-icon.svg"
import ControlContext from "../store/ContextControl"

const list = [
    {
        name: "Home",
        icon:  homeIcon,
    },
    {
        name: "Send Money",
        icon:  SendIcon,
    },
    {
        name: "Investment",
        icon:  InvestIcon,
    },
    {
        name: "Loan",
        icon:  loanIcon,
        active: true,
    },
    {
        name: "Cards",
        icon:  cardIcon,
    },
    {
        name: "Transactions",
        icon:  transactionIcon,
    },
    {
        name: "Marketplace",
        icon:  marketIcon,
    },
    {
        name: "Settings",
        icon:  settingIcon,
    },

]

const NavBarLinks = () => {
    const ctrCtx = useContext(ControlContext)
  return (
    < >
    <ul className="nav-list">
        {
            list.map(({name, icon, active}, index) => {
                return (
                    <li onClick={() => ctrCtx.sideBarToggleFunc("close") } key={index} className={`nav-item ${active && "nav-item-active"}`}>
                       <figure><img src={icon} alt="" /></figure>
                       <span>{name}</span>
                    </li>
                )
            } )
        }
    </ul>
    </>
  )
}

export default NavBarLinks