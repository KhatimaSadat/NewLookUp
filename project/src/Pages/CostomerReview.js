import { ReactDOM } from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import react,{ Component } from "react";
import picture from "../Asset/photos/brooke-cagle-NoRsyXmHGpI-unsplash.jpg";
import picture1 from "../Asset/photos/jeremy-mcknight-ix9I7kfMpcc-unsplash.jpg";
import picture2 from "../Asset/photos/nicolas-horn-MTZTGvDsHFY-unsplash.jpg";
import './CostomerReview.css';
const CostomerReview = ()=>  {
      return ( 
         <div className="general">
             <article>Return to our page </article>
             <Carousel showArrows={true} className="main">
              <div className="wrapper">
                <div className="section">
                      <div><img src={picture}/></div>
                      <div className="paragraphe">
                        <h5>Name of the user</h5>
                        <div className="comma">,,</div>
                        <p>Information of the user Information of the user Information of the user</p>
                        <div className="footer"> <div className="email">emailoftheuser@gmail.</div><div className="detail">Detail</div></div>
                      </div>
                </div> 
              </div> 
              <div className="wrapper">
              <div className="section">
                      <div><img src={picture1}/></div>
                      <div className="paragraphe">
                        <h5>Name of the user</h5>
                        <div className="comma">,,</div>
                        <p>Information of the user Information of the user Information of the user</p>
                        <div className="footer"> <div className="email">emailoftheuser@gmail.</div><div className="detail">Detail</div></div>
                      </div>
                </div> 
              </div> 
              <div className="wrapper">
              <div className="section">
                      <div><img src={picture2}/></div>
                      <div className="paragraphe">
                        <h5>Name of the user</h5>
                        <div className="comma">,,</div>
                        <p>Information of the user Information of the user Information of the user</p>
                        <div className="footer"> <div className="email">emailoftheuser@gmail.com</div><div className="detail">Detail</div></div>
                      </div>
                </div>
              </div>  
              
             </Carousel>
             <button>Costomer view</button>
         </div>
      );
    }

 
export default CostomerReview;