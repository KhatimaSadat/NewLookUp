import './featureStyle.css';
import {FaTwitter, FaGithub, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaHome} from 'react-icons/fa'

 function Feature() {
  return (
    <>
        <section className="feature-section">
            <div className="feature-container">
                <div className="feature-content">
                    <div className="feature-box">
                        <div className="single-text-box">
                            <h4>- Thelookup Features</h4>
                            <h1>We deliver you best <br /> Quality</h1>
                            <p>It is a long established fact that a reader will <br /> be distracted by the readable</p>
                        </div>
                        <div className="single-con-box">
                            <div className="mini-box mini-sec-box">
                                <div className="icon-box">
                                    <FaMapMarkerAlt />
                                </div>
                                <h1>Address lookup</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, labore?</p>
                                <a href="#">Learn more . . .</a>
                            </div>
                            <div className="mini-box">
                                <div className="icon-box">
                                    <FaPhoneAlt />
                                </div>
                                <h1>Mobil Validation</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, labore?</p>
                                <a href="#">Learn more . . .</a>
                            </div>
                        </div>
                    </div>

                    <div className="feature-box feature-box2">
                        <div className="single-text-box single-text-box2" >
                            <h1>Tell us about new feature</h1>
                            <a href="#" className='emailAddress'>thelookup@gmail.com</a>
                            <div className="icons-container">
                                <a href="#"><FaTwitter /></a>
                                <a href="#"><FaGithub /></a>
                            </div>
                        </div>
                        <div className="single-con-box single-con-box2">
                            <div className="mini-box mini-sec-box">
                                <div className="icon-box">
                                    <FaEnvelope />
                                </div>
                                <h1>Emial Validation</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, labore?</p>
                                <a href="#">Learn more . . .</a>
                            </div>
                            <div className="mini-box">
                                <div className="icon-box">
                                    <FaHome />
                                </div>
                                <h1>Bank Validation</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, labore?</p>
                                <a href="#">Learn more . . .</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Feature