import axios from "axios";
import {useState,useEffect} from 'react';
function Publication(){
    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get('id');  
    const [isLoading,setIsLoading] = useState(true);
    
    useEffect(()=>{
        const fData = new FormData();
        fData.append('pid',id);
        const url = 'http://localhost:80/server/routes/publication.php';

        axios.post(url,fData).then(res=>{
            console.log(res.data);
            setIsLoading(false);
        });
    },[])

    if(isLoading){
        return(
            <div>
                Loading...
            </div>
        )
    }else{
        return(
        <div className="publication">
            {id}
        </div>
        )
    }


    
}

export default Publication;