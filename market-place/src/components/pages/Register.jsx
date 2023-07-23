import {Link} from 'react-router-dom';
import style from '../styles/Login.module.css'
import { useState } from 'react';
import axios from 'axios';
function Register(){
    const [pass,setPass] = useState('');
    const [check,setCheck] = useState('');
    const [login,setLogin] = useState('');
    const [message,setMessage] = useState('');
    const [email,setEmail] = useState('');
    const [code,setCode] = useState('');
    const [checkCode,setCheckCode] = useState('');
    const [isEmail,setIsEmail] = useState(true);
    function registerChecker(){
        if(login.length<=3 || pass.length<=3 || code.length!==6 || pass!==check){
            return true;
        }


        return false;
    }
    if(sessionStorage.length===0){
        
        function handleVerify(){
            if(login.length<=3 || pass.length<=3){
                setMessage('Please fill login and password below');
                return;
            }
            let fData = new FormData();
            fData.append('email',email);

            const url = 'http://localhost:80/server/sendemail/send.php';
            axios.post(url,fData).then(response=>{
                console.log(response.data.code)
                setCode(response.data.code);
               return response.data.code;
                
            }).then(
                (res)=>{
                    if(res ==='error'){
                        setMessage('Not valid email')
                    }else{
                        setIsEmail(false);
                    }
                }
                
                
            );
            
            
            

        }
        function registerHendler(){
            setMessage('Loading...')
            console.log(code)
            if(registerChecker()){
                setMessage('Something went wrong')
                return;
            }
            console.log(code);
            console.log(checkCode)
            if(code!==checkCode){
                setMessage('<p class"error">Wrong verify email</p>');
                return;
            }
            let fData = new FormData();
            fData.append('userName',login);
            fData.append('pass',pass);
            fData.append('email',email);
            const url = 'http://localhost:80/server/routes/register.php'
            console.log(code);
            console.log(checkCode)
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
                            {(pass.length>=4 || check.length>=4)&&pass!==check?'Passwords are different':''}
                        </div>
                        {isEmail? <div className={style.email}>
                            <input type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>

                            <button onClick={handleVerify} className={style.verify}>Verify</button>
                        </div>: <input type="text" placeholder='Enter code' onChange={e=>setCheckCode(e.target.value)}/>}
                       
                        

                        <button onClick={registerHendler} >Register</button>
                        
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