import {FaBars} from 'react-icons/fa';
import './headerStyle.css';
import logo from '../../Asset/photos/logo.png';
import {Link} from 'react-router-dom/cjs/react-router-dom.min'
function Header({openSidebar}) {
  
  return (
    <>
        <div className="nav-container">
          <header>
              <div className="icon" onClick={openSidebar}>
                <FaBars />
              </div>
              <div className="img-con">
                 <img src={logo} alt="" />
              </div>
              <h2>  Thelookup</h2>
          </header>
         
          <nav>
            <ul>
              <li><Link to="/home" > HOME</Link></li>
              <li><Link to="/aboutUs">ABOUT US</Link></li>
              <li><Link to="/featurs">FEATURES</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
            </ul>
            <button><Link to="/">LOG IN</Link></button>
          </nav>
        </div>
    </>
  )
}

export default Header