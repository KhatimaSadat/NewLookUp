import image from './background.jpg';
import './Home.css';
const Home = () => {
    return (  
        <div className="container">
              <img src={image} className="home-photo" alt=" " />
            <div className="content">
              <h1 className="h1">
              Thelookup, well-Known API <br/>
              for address lookup and <br/>
              form validation </h1>
            <div>
              <p className="paragraph">It is a long established fact that a reader will be distracted <br/>
              by the readable content of a Page.
              </p>
            </div>
            <div className="buttons">
            <button className="get-btn">Get Started</button>
            <button className="start-btn">Start your free trial</button>
            <div className="traingle"></div>
            </div>
            </div> 
          </div>
    );
}
export default Home;


