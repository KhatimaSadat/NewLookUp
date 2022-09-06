import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import AboutUs from '../Pages/AboutUs';
import Contact from '../Pages/Contact'
import Featurs from '../Pages/Featurs';
import Footer from '../Layout/Footer/Footer';
import Home from '../Layout/Home/Home';
import LogIn from '../Pages/LogIn';
import NavBar from '../Layout/NavBar/NavBar';
import CostomerReview from "../Pages/CostomerReview";
function App() {
  return (
      
       <Router>
         <div className='content'>
         <NavBar/>
          <Switch>
             <Route exact path="/">
                 <LogIn/> 
             </Route>
             <Route path="/AboutUs">
                 <AboutUs/>
             </Route>
             <Route path="/featurs">
                 <Featurs/>
             </Route>
             <Route path="/contact">
               <CostomerReview/>
                 <Contact/>
             </Route>
             <Route path="/home">
                <Home/> 
             </Route>
          </Switch>
          <Footer/>
         </div>
       </Router>

  );

}

export default App;
