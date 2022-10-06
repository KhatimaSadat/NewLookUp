import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import AboutUs from '../Pages/AboutUs';
import Contact from '../Pages/Contact'
import Featurs from '../Pages/Feature';
import Footer from '../Layout/Footer/Footer';
import Home from '../Layout/Home/Home';
import LogIn from '../Pages/LogIn';
import CostomerReview from "../Pages/CostomerReview";
import NavBar from '../Layout/NavBar/NavBar';
function App() {
  return (
    <div className='content'>
       <Router>
         
         <NavBar/>
          <Switch>
             <Route exact path="/">
                 <LogIn/> 
             </Route>
             <Route path="/aboutUs">
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
       </Router>
       </div>

  );

}

export default App;
