import React from "react";
import axios from 'axios';
import { useState } from "react";
import style from '../styles/Login.module.css'
import {Link} from 'react-router-dom';
function Login() {
    const [userName,setUserName] = useState("");
    const [pass,setPass]=useState("");
    const [message,setMessage]=useState(null)
    
    let loginHandler =()=>{
        setMessage('loading...')
        let fData = new FormData();
        const url = 'http://server/routes/login.php'
        fData.append('action','login')
        fData.append('userName',userName);
        fData.append('pass',pass);
        axios.post(url,fData)
        .then(response=>{
            console.log(response.data)
            if(response.data.username){
                setMessage(<p className={style.good}>You have loggined</p>)
                Object.keys(response.data).forEach(key=>{
                    sessionStorage.setItem(key,response.data[key])
                })

            }else{
                setMessage(<p className={style.error}>Wrong username or password</p>)
                
            }
        }).then(response=>{
            window.location.reload(true)
        })
        .catch(err=>alert(err))
        
    }
    return (
        <div className={style.login}>
            <div className={style.content}>
                <h1>Log in</h1>
                
                    <div className="messages">{message}</div>
                
                <div className={style.form}>
                    
                    <input type="text" placeholder="login" name="username" id="log" onChange={(e)=>{
                        setUserName(e.target.value)
                    }} />
                    
                    <input type="password" placeholder="password" name="pass" id="pass" onChange={(e)=>{
                        setPass(e.target.value)
                    }} onKeyDown={(event)=>{
                        if(event.key ==="Enter"){
                            loginHandler();
                        }
                    }}/>
                   
                    <button onClick={loginHandler} type="submit" >Log in</button>

                </div>
                <p>
                    Dont have account? <Link to="/register">Register</Link>
                </p>
                
            </div>
            
        </div>
    )
}
export default Login;