import React from 'react'
import  './sidebarStyle.css'
import {Link} from 'react-router-dom/cjs/react-router-dom.min'

function SideBar({sidebar}) {
  return (
    <>
        <div className={sidebar ? "sidebar sidebar-open": "sidebar" }>
            <ul>
              <li><Link to="/home" > HOME</Link></li>
              <li><Link to="/aboutUs">ABOUT US</Link></li>
              <li><Link to="/featurs">FEATURES</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
              <li><Link to="/">Login</Link></li>
            </ul>
        </div>
    </>
  )
}

export default SideBar