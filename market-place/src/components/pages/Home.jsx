import React from "react";
import style from '../styles/Home.module.css'

function Home(){
    console.log(sessionStorage.getItem('user'))
    console.log(sessionStorage)
    return(
        <div className={style.home}>
            <h1>BazarUA</h1>
            <p>
                This is market place for homeless
                
            </p>
            <div className="user">
                
            </div>
        </div>
    )
}
export default Home;