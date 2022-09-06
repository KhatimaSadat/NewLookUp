
import EmailIcon from '@mui/icons-material/Email';
import Person from '@mui/icons-material/Person'
import Key from '@mui/icons-material/VpnKey';
import Check from '@mui/icons-material/Check';
import './Login.css';
import { useState } from "react";
import {useHistory} from 'react-router-dom';
const LogIn = () => { 
    const [ Name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password ,setPassword] =useState('');
    const [confirmPassword ,setConfirmPassword] =useState('');
    const [isError ,setIsError] =useState('');
    const [checkUser, setCheckUser]=useState('');
    const [checkpassword , setCheckpassword]=useState('');
    const history = useHistory();
    

    function handleSignup(){
      const sign_in = document.getElementById("sign-in");
      const sign_up = document.getElementById("sign-up");
      if(sign_up.style.display === "none")
      {
        sign_in.style.display="none";
        sign_up.style.display="block";
      }
      else{
        sign_in.style.display="block";
        sign_up.style.display="none";
      }
     }

     

    const handleSubmit = (e) =>{
     
      const info={ Name ,email , password} ; 
      fetch('http://localhost:8000/user' ,{
           method:'post',
           headers: { "Content-Type" : "application/json"} ,
           body : JSON.stringify(info)
      }) 
      .then(()=>
      {
        console.log("data added");
        
      })
      .catch(()=>{
        console.log("the json server is not active to write ");
      });
      history.push('/home');
    }
    const handleDirection = ()=>{
      history.push('/home');
    }
    return (  
        <div className="login-container">
            <div className="login" id="login">
              <div className="sign-in" id="sign-in">
                  <h2>Sign In</h2>
                    <form>
                        <div className='input'><i><Person sx={{fontSize:15}}/></i><input type="text" placeholder="User Name or Email" onChange={(e) => setCheckUser(e.target.value)}></input></div>
                        <div className='input'><i><Key sx={{fontSize:15}}/></i><input type="password" placeholder="Password" onChange={(e) => setCheckpassword(e.target.value)}></input></div>
                        <p className="forget">forget password?</p>
                        <button onClick={handleDirection} >Log IN</button>
                    </form>
                    
                    <p>dont have account? </p> 
                    <div  className="sign-up-btn" onClick={handleSignup}>Sign up</div> 
              </div>
              <div className="sign-up" id="sign-up">
                  <h2>Sign up</h2>
                    <form onSubmit={handleSubmit}>
                       
                        <div className='input'><i><Person sx={{fontSize:15}}/></i><input type="text" placeholder="User Name" onChange={(e) => setName(e.target.value)}/></div>
                        <div className='input'><i><EmailIcon sx={{fontSize:15}}/></i><input type="email" placeholder= "Email" onChange={(e) => setEmail(e.target.value)}></input></div>
                        <div className='input'><i><Key sx={{fontSize:15}}/></i><input type="password" placeholder="password"  onChange={(e) => setPassword(e.target.value)}></input></div>
                        <div className='input'><i>< Check sx={{fontSize:15}}/></i><input type="password" placeholder="confirm"  ></input></div>
                        <div>
                          <p>{isError}</p>
                        </div>
                        <button >sign up</button>
                    </form>
                    
                    <p>Already have account? </p>
                    <div  className="sign-up-btn" onClick={handleSignup}>Log in</div>  
                    
                </div>
            </div>
        </div>

    );
}
 
export default LogIn;