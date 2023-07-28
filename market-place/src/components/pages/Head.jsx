import style from '../styles/Head.module.css';
import { Link } from "react-router-dom";
function Head() {
    return (
        <div className={style.head}>
            <div >
                <img className={style.logo} src="https://imgpng.ru/d/letter_b_PNG4.png" />
            </div>
            <nav className="nav">
                <ul className={style.ul}>
                    <li><Link to="/">Home </Link></li>
                    <li><Link to="/publications">Publications </Link></li>
                    <li><Link to="/login">{sessionStorage.length===0?'Log in':'Profile'}</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default Head;