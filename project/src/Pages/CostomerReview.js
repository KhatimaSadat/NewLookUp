import picture from "../Asset/photos/CostomerReview/brooke-cagle-NoRsyXmHGpI-unsplash.jpg";
import picture1 from "../Asset/photos/CostomerReview/jeremy-mcknight-ix9I7kfMpcc-unsplash.jpg";
import picture2 from "../Asset/photos/CostomerReview/nicolas-horn-MTZTGvDsHFY-unsplash.jpg";
import  ArrowForward  from "@mui/icons-material/KeyboardArrowRight";
import ArrowBack  from "@mui/icons-material/KeyboardArrowLeft";
import './CostomerReview.css';
const CostomerReview = () => {
    const handleBack=()=>{
      const contain=document.querySelector(".cutomer-container");
     
      contain.scrollBy(750,0);
    }
    const handleFarword =()=>{
      const contain=document.querySelector(".cutomer-container");
      contain.scrollBy(750,0);
    }
    return ( 
       <div id="general">
         <div className="cutomer-container" id="customer-container">
            <div className="Header">Return to our page</div>
            <div className="wrapper" id="wrapper">
              <div className="control">
                <div ><ArrowForward fontSize="small" /></div>
                <div ><ArrowBack fontSize="small" /></div>
              </div>
              <div className="section">
                   <div><img src={picture}/></div>
                   <div className="paragraphe">
                      <h5>Name of the user</h5>
                      <div className="comma">,,</div>
                      <p>Information of the user Information of the user Information of the user</p>
                      <div className="footer"> <div className="email">emailoftheuser@gmail.</div><div className="detail">Detail</div></div>
                   </div>
              </div> 
              <div className="control">
                <div ><ArrowForward  fontSize="small"/></div>
                <div ><ArrowBack fontSize="small"/></div>
              </div>
              <div className="section">
                   <div><img src={picture1}/></div>
                   <div className="paragraphe">
                     <h5>Name of the user</h5>
                     <div className="comma">,,</div>
                     <p>Information of the user Information of the user Information of the user</p>
                     <div className="footer"> <div className="email">emailoftheuser@gmail.</div><div className="detail">Detail</div></div>
                   </div>
               </div> 
               <div className="control">
                  <div ><ArrowForward fontSize="small"/></div>
                  <div ><ArrowBack fontSize="small" /></div>
               </div>
               <div className="section">
                   <div><img src={picture2}/></div>
                   <div className="paragraphe">
                      <h5>Name of the user</h5>
                      <div className="comma">,,</div>
                      <p>Information of the user Information of the user Information of the user</p>
                      <div className="footer"> <div className="email">emailoftheuser@gmail.</div><div className="detail">Detail</div></div>
                   </div>
               </div> 
               <div className="control">
                  <div ><ArrowForward fontSize="small"/></div>
                  <div ><ArrowBack fontSize="small" /></div>
              </div>
            </div>
            <button>Cutomer review </button>

         </div>
       </div>
     );
}
 
export default CostomerReview;