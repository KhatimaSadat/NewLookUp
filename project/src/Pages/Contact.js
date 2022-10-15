

import {FaInstagramSquare} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {HiLocationMarker} from 'react-icons/hi'
import { MdEmail} from 'react-icons/md'
import {FaPhoneAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './ContactUs.css';
const Contact = () => {
    return ( 
        <div  className="contact">
        <div className="section-one">
                <p className='contact-use'>contact.use</p>

                <h2 className='Get-touch'>Get in touch</h2>
                <p>it is a long established fact that a raeder well<br/> be distracted by the readabe</p> 

                <h2 className='follow'>Follow us on social</h2>
                <p>it is a long established fact that a raeder well<br/> be distracted by the readabe</p>
                <div className='logo'>
                <Link to="thelookup@gmail.com" className='social'><FaInstagramSquare size={30} /></Link>
                <Link to="thelookup@gmail.com" className='social'><FaFacebookSquare size ={30} /></Link>
                <Link to="thelookup@gmail.com" className='social'><FaTwitterSquare size ={30} /></Link>
                </div>
            
                <h2 className='address'>Address</h2>
                <p className='address-1'><HiLocationMarker size={15}/>&nbsp;&nbsp;&nbsp;silo Road,1st streat,Kabul</p>
                <Link to="thelookup@gmail.com" className='address-1'>< MdEmail size={15}/>&nbsp;&nbsp;&nbsp;thelookup@gmail.com</Link>
                <p className='address-1'><FaPhoneAlt size={15}/>&nbsp;&nbsp;&nbsp;0798827626</p>
        </div>


        <div className="section-two">
                <h2 className='send-message'>Send us a message</h2>
                <div >
                    <input type="text" placeholder="first name" className='first-last-name'/>
                    <input type="text" placeholder="last name" className='first-last-name'/>
                </div>
                <div>
                    <input type="text" placeholder="EmailAddress" className='info'/>
                </div>
                <div>
                    <input type="text" placeholder="message" className='info'/>
                </div>
                <Link to="thelookup@gmail.com"> <button  className='send-button'>Send massege!</button> </Link>
                <h1 className='start'>Start your journey</h1>
                <Link to="thelookup@gmail.com"><button className='start-button'>Start now!</button> </Link>
        </div>
      </div>
     );
}
 
export default Contact;

