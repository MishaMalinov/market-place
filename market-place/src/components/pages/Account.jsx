import { Link } from "react-router-dom";
import style from '../styles/Account.module.css'
import { useState,useRef} from "react";
import axios from "axios";
function Account(){
    function handleButton(){
        for(let key of Object.keys(sessionStorage)){
            sessionStorage.removeItem(key)
        }
        window.location.reload(true);
    }
    const inputName = useRef();
    const inputSurname = useRef();


    function SettingData({name, reff}){

        return(
            <>
            <input type="text" placeholder={`Enter ${name}`} ref={reff} onKeyDown={(event)=>{
                if(event.key === "Enter" && reff.current.value.length >=3){
                    const text = reff.current.value;
                    let fData = new FormData();
                    fData.append('action','userChange');
                    fData.append('uid',sessionStorage.getItem('uid'))
                    fData.append('what',name);

                    fData.append('text',text);
                    console.log(text)
                    const url = 'http://localhost:80/server/routes/userchange.php'
                    axios.post(url,fData);
                    sessionStorage.setItem(name,text);
                    window.location.reload(true)
                }
            }}/>
            </>
        )
    }
    return(
        <div className={style.account}>
            <div className="label">
                <h1>Profile</h1>
            </div>
            
            <div className={style.profile}>
                <ul>
                    <li>
                        User name : {sessionStorage.getItem('username')}
                    </li>
                    <li>
                        Password : {sessionStorage.getItem('password')}
                    </li><li>
                        First name : {sessionStorage.getItem('name')|| <SettingData name={'name'} reff={inputName}/>}
                    </li><li>
                        Last name : {sessionStorage.getItem('surname')|| <SettingData name={'surname'} reff={inputSurname}/> }
                    </li>
                </ul>
                

            </div>

            
            <div className="signout">
                <Link to='/login'><button onClick={handleButton}>Sign Out</button></Link>
                
            </div>

        </div>

    )

}
export default Account;