import { useState } from "react";
import axios from "axios";
import api from "../../../path";

function Filter({ setPosts, setIsLoading }) {
    const [low, setLow] = useState(sessionStorage.getItem('price_low')!==sessionStorage.getItem('price_minimum')? sessionStorage.getItem('price_low'):'');
    const [high, setHigh] = useState(sessionStorage.getItem('price_high')!==sessionStorage.getItem('price_maximum')? sessionStorage.getItem('price_high'):'');
    const [message, setMessage] = useState('');



    function checker(string) {

        if (Number(string) < 0 || Number(string) >= 99999999) return false;
        if(low!==''&&high!=='') return false;
        return true;

    }
    function clearHandler() {
        sessionStorage.removeItem('price_low');
        sessionStorage.removeItem('price_high');

        //rerender page with all publications
        const fData = new FormData();
        fData.append("publications", "1");
        let url = api+"/server/routes/publications.php?";
        axios.post(url, fData).then((res) => {
            // Update state directly with the response data
            setPosts(res.data);
            setIsLoading(false);
        });
        setHigh('');
        setLow('');
    }

    function filterHandler() {
        if (checker(low) && checker(high) ) {
            setMessage('')
            
            const url = api+`/server/routes/publications.php?low=${low||sessionStorage.getItem('price_minimum')}&high=${high||sessionStorage.getItem('price_maximum')}`;
            const fData = new FormData();
            fData.append('filter', 'true');
            fData.append('publications', 'true');

            axios.post(url, fData).then(res => setPosts(res.data));
            sessionStorage.setItem('price_low', low);
            sessionStorage.setItem('price_high', high);

        } else {
            setLow('');
            setHigh('');

            setMessage('Something wrong');
        }

    }
    return (
        <div className="filter">
            <div className="filter-container">
                <div className="error message">{message}</div>
                <label name="price_from">From</label>
                <input type="number" name="price_from" value={low} onChange={(e) => setLow(e.target.value)} />
                <label name="price_to">To</label>
                <input type="number" name="price_to" value={high} onChange={(e) => setHigh(e.target.value)} />
                <button onClick={filterHandler}>Filter</button>
                <button onClick={clearHandler}>Clear</button>

            </div>
        </div>
    )
}

export default Filter;