import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {login} from "../features/userSlice";
import './Login.css'



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(email==='hruday@gmail.com' && password==='hruday123') {
            dispatch(login({
                email:email,
                password:password,
                loggedIn:true
            }));
        }

        if(email!=='hruday@gmail.com' || password!=='hruday123') {
            setIsLoggedIn(!isLoggedIn)
        }
        
    }



  
    return (
        <div className="login">
            <form className="login_form" onSubmit={(e) => handleSubmit(e) } >
                <h1>Login Here</h1>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="submit_btn" >LOGIN</button>
                {
                    isLoggedIn && 
                <p>Invalid UserName or Password</p>
                }
            </form>
        </div>
    );
};

export default Login;