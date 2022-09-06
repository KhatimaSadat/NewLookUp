import './Feature.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/LocalPhone';
import BankIcon from '@mui/icons-material/AccountBalance';
import EmailIcon from '@mui/icons-material/Mail';
import ArrowIcon from '@mui/icons-material/ArrowForward';

const Featurs = () => {
    return (  
            <div className="content-of-feature">
                <div className="left-side">
                      <div className='section'>
                        <p>TheLookUP Features</p>
                        <h2>We deliver you the best</h2>
                      </div>
                      <div className='section'>
                        <p>It is a long establish fact that a reader will be distributed by the readable</p>
                      </div>
                      <div className='section'>
                          <h2>Tell us about new features</h2>
                          <p><a href="https://www.gmail.com/thelookup">thelookup@gmail.com</a></p>
                          <div className='icon'>
                             <div className='twit'><TwitterIcon sx={{fontSize:40}}/></div>
                             <div className='git'><GitHubIcon sx={{fontSize:40}}/></div>
                          </div>
                      </div>
                </div>
                <div className="right-side">
                    <div className="section">
                           <div className='empty'>
                               <div className='icon'>
                               <LocationIcon sx={{fontSize:50}}/>
                               </div >
                           </div>
                           <div className='text'>
                                <h3>Address LookUp</h3>
                                <p>this is paragrphe about bank and this is paragraphe about bank</p>
                                <div className='more'>
                                    <div >Learn more ... </div>
                                    <div ><ArrowIcon/></div>
                                 </div>
                           </div>
                          
                    </div>
                    <div className="section">
                            <div className='empty'>
                               <div className='icon'>
                                <PhoneIcon sx={{fontSize:50}}/>
                               </div>
                            </div>
                            <div className='text'>
                                <h3>Mobile Validation</h3>
                                <p>this is paragrphe about bank and this is paragraphe about bank</p>
                                <div className='more'>
                                    <div >Learn more ... </div>
                                    <div ><ArrowIcon/></div>
                                </div>
                           </div>
                            
                    </div>
                    <div className="section">
                            <div className='empty'>
                               <div className='icon'>
                                <EmailIcon sx={{fontSize:50}}></EmailIcon>
                               </div>
                            </div>
                            <div className='text'>
                                <h3>Email validation</h3>
                                <p>this is paragrphe about bank and this is paragraphe about bank</p>
                                <div className='more'>
                                    <div >Learn more ... </div>
                                    <div ><ArrowIcon/></div>
                                 </div>
                           </div>
                    </div>
                    <div className="section">
                            <div className='empty'>
                                <div className='icon'>
                                  <BankIcon sx={{fontSize:50}}></BankIcon>
                                </div>
                            </div>
                            <div className='text'>
                                <h3>Bank validation</h3>
                                <p>this is paragrphe about bank and this is paragraphe about bank</p>
                                <div className='more'>
                                    <div >Learn more ... </div>
                                    <div ><ArrowIcon/></div>
                                 </div>
                           </div>
                    </div>
                 </div>
            </div> 
    );
}
 
export default Featurs;