import {Spin as Humburger} from 'hamburger-react';
import logo from '../../Asset/Logo/Group 74.png';
import './NavBar.css';

import { Link } from "react-router-dom/cjs/react-router-dom.min";
const NavBar = () => {
  return (  
          <nav className='navbar'>
          <nav className="left-side">
          <div className='Humburger'> <Humburger rounded color='white' size={30} /> </div>
          <div  > <hr  className="vertical"/></div> 
           <div className='logo'>  <img src={logo} className="logo" alt=" " /> </div> 
            
          </nav> 
          <nav className='right-side'>
             <Link to="/"> HOME </Link>
             <Link to="/AboutUs">ABOUT US</Link>
             <Link to="/featurs">FEATURES</Link>
             <Link to="/contact">CONTACT</Link>
             <Link to="/login">LOG IN</Link>
          </nav>
          </nav>
    );
}
export default NavBar;





 
