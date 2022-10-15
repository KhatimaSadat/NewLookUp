import group from '../Asset/photos/Group49.png';
import './AboutUs.css';
const AboutUs = () => {
    return ( 
      <div className="about-us-gride">
          <div className="aboutUs-left-side">
             <h2 className="h2"> <span>&#8221;</span>Team work and intelligence </h2>
             <h2 className="h22">win champioships</h2>
             <p className="paragraph-about-us">
                It is a long established fact that a reader will be distracted by the <br/>
                It is a long established fact that a reader will be distracted by the <br/>
                readablelt is a long established fact that a reader will. <br/>
                <p className="learn">Learn more...</p>
             </p>
             <div className="info">
                  <div className="experience">
                    <div className="number" >4</div>
                    <div className="ex"> years of <br/> experience </div>
                  </div>
                  <div className="companies">
                    <div className="number2">86</div>
                    <div className="company">Companies <br/> trusts </div>
                  </div>
             </div>
             <div className="btns">
                <button className="products">More Products</button>
                <button className="talk">Talk To a Salesman</button>
             </div>
          </div>
          <div className="right-side">
              <img src={group} className="about-photo" alt=" " />
          </div>
      </div>
     );
}
 
export default AboutUs;
















































