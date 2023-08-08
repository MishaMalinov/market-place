import { useState } from "react";
import axios from "axios";
function Filter({setPage}){
    const [low,setLow] = useState('');
    const [high,setHigh] = useState('');
    const [message,setMessage] = useState('');
    function test(){
        let inside =0 ;
        function r(){
            inside+=Math.round(Math.random()*30);
            console.log(inside);
            if(inside>=250)return inside;
            else return r();
        }
        return r()
    }
    console.log(test())


    //TODO: доробити фільтер
    function checker(){
        
        if(low==='' && high==='')return false;
        if(+low <0 || +high<0)return false;console.log(+low)
        // if(+low>+high)return false;

    }
    function clearHandler(){
        sessionStorage.removeItem('price_low');
    }

    function filterHandler(){
        if(checker()){
            setMessage('')
            const url = `http://server/routes/publications.php?low=${low}&high=${high}`;
            const fData = new FormData();
            fData.append('filter','true');
            fData.append('publications','true');

            axios.post(url,fData).then(res=>setPage(res.data));
            sessionStorage.setItem('price_low',low);
        }else{
            setMessage('Something wrong')
        }
        
    }
    return(
        <div className="filter">
            <div className="filter-container">
                <div className="error message">{message}</div>
                <label name="price_from">From</label>
                <input type="number" name="price_from" onChange={(e)=>setLow(e.target.value)}/>
                <label name="price_to">To</label>
                <input type="number" name="price_to"onChange={(e)=>setHigh(e.target.value)}/>
                <button onClick={filterHandler}>Filter</button>
                <button onClick={clearHandler}>Clear</button>

            </div>
        </div>
    )
}

export default Filter;