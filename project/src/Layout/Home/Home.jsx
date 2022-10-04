import { useState } from 'react'
import BackDrop from '../NavBar/BackDrop'
import Header from '../NavBar/Header';
import SideBar from '../NavBar/SideBar';
import './homeStyle.css';

function Home() {
  const [sidebar, setSidebar] = useState(false)

  const toggleSidebar = () => {
      setSidebar((prevState) => !prevState)
  }
  return (
    <>
        <div className="background">
            <div className="background-overly">
               <Header openSidebar={toggleSidebar} />
               <BackDrop sidebar={sidebar} closeSidebar={toggleSidebar} />
               <SideBar sidebar={sidebar} />
               <div className="home-container">
                  <div className="home-content">
                      <h1>Thelookup, will-known API <br />for address lookup and <br />form validation</h1>
                      <p>It is a long established fact that a reader will be distracted</p>
                      <div className="btn-container">
                          <button>Get started</button>
                          <button>Start your free Trial</button>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home