import { Link } from "react-router-dom";
import api from "../../path";
import style from '../styles/Account.module.css'
import { useState, useRef,useEffect } from "react";
import axios from "axios";
function Account() {
    const [loadPublications,setLoadPublications] = useState(true);
    const [pubs,setPubs] = useState([]);
    useEffect(()=>{
        const url = api+'/server/routes/publicationInProfile.php';
        const fData = new FormData();
        fData.append('uid', sessionStorage.getItem('uid'));

        axios.post(url,fData).then((res)=>setPubs(res.data));
        setLoadPublications(false);

    },[])
    function handleButton() {
        for (let key of Object.keys(sessionStorage)) {
            sessionStorage.removeItem(key)
        }
        window.location.reload(true);
    }
    const inputName = useRef();
    const inputSurname = useRef();


    function SettingData({ name, reff }) {
        return (
            <>
                <input type="text" placeholder={`Enter ${name}`} ref={reff} onKeyDown={(event) => {
                    if (event.key === "Enter" && reff.current.value.length >= 3) {
                        const text = reff.current.value;
                        let fData = new FormData();
                        fData.append('action', 'userChange');
                        fData.append('uid', sessionStorage.getItem('uid'))
                        fData.append('what', name);

                        fData.append('text', text);
                        console.log(text)
                        const url = api+'/server/routes/userchange.php'
                        axios.post(url, fData);
                        sessionStorage.setItem(name, text);
                        window.location.reload(true)
                    }
                }} />
            </>
        )
    }
    function List(){
        if(loadPublications){
            return(
                <div>
                    Loading...
                </div>
            )
        }else{
            return(
                <div className="publications">
                    <h1>Publications</h1>
                    <div className="container">
                        <ul>
                        {
                            pubs.map((element,index) => {
                                return(<li key={index}>
                                    <Link to={`/publication?id=${element.pid}`}>{element.article}</Link>
                                   

                                </li>)
                            })
                        }
                        </ul>
                    </div>

                </div>
            )
        }

    }




    return (
        <div className={style.account}>
            <div className={style.label}>
                <h1>Profile</h1>
            </div>

            <div className={style.profile}>
                <ul>
                    <li>
                        User name : {sessionStorage.getItem('username')}
                    </li>
                    <li>
                        Password : {sessionStorage.getItem('password')}
                    </li>
                    <li>
                        First name : {sessionStorage.getItem('name') || <SettingData name={'name'} reff={inputName} />}
                    </li>
                    <li>
                        Last name : {sessionStorage.getItem('surname') || <SettingData name={'surname'} reff={inputSurname} />}
                    </li>
                    <li>
                        Tellefon number : {sessionStorage.getItem('tel_number')}
                    </li> <li>
                        Email : {sessionStorage.getItem('email') }
                    </li>
                </ul>
                <div className="signout">
                    <Link to='/addpublication'><button >Add new publication</button></Link>

                </div>

            </div>
            <div className="signout">
                <Link to='/login'><button onClick={handleButton}>Sign Out</button></Link>

            </div>
            
            <List/>
            
            



        </div>

    )

}
export default Account;