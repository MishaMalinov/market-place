import {Link} from 'react-router-dom';
import style from '../styles/Login.module.css'
import { useState } from 'react';
import axios from 'axios';
function Register(){
    const [pass,setPass] = useState('');
    const [check,setCheck] = useState('');
    const [login,setLogin] = useState('');
    const [message,setMessage] = useState('')
    if(sessionStorage.length===0){
        function wrongDataHendler(){
            setMessage('Something went wrong, try again)')
        }
        function registerHendler(){
            setMessage('Loading...')
            let fData = new FormData();
            fData.append('action','register');
            fData.append('userName',login);
            fData.append('pass',pass);

            const url = 'http://localhost:80/server/'

            axios.post(url,fData).then(res=>console.log(res.data));
        }
        return(
            <div className={style.login}>
                <div className={style.content}>
                    
                    <h1>Register</h1>
                    <div className="messages"><span className={style.error}>{message}</span></div>
                    <div className={style.form}>
                        
                        <input type="text" placeholder="login" onChange={(e)=>{setLogin(e.target.value)}}/>
                        <input type="password" placeholder="password" onChange={(e)=>{setPass(e.target.value)}}/>
                        <input type="password" placeholder="password" onChange={(e)=>{setCheck(e.target.value)}}/>
                        <div className="checker">
                            {(pass.length<4 || check.length<4)&&pass!==check?'Passwords are different':''}
                        </div>
                        <Link to="/login" className={style.button}><button onClick={(pass.length<4 || check.length<4)||pass!==check||login.length<3?wrongDataHendler:registerHendler} >Register</button></Link>
                        
                    </div>
                    <p>
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                    
                </div>
    
            </div>
        )

    }else{
        return (
            <div>
                <h1 className={style.error}>This page in not avaible</h1>
            </div>

        )
    }

    
}

export default Register;