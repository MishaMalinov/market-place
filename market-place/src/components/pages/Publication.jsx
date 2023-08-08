import axios from "axios";
import {useState,useEffect} from 'react';
import style from '../styles/Publication.module.css'
function Publication(){
    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get('id');
    const [isLoading,setIsLoading] = useState(true);
    const [article,setArticle] = useState('asdf');
    const [price,setPrice] = useState('');
    const [owner,setOwner] = useState('');
    const [description,setDescription] = useState('');
    const [date,setDate] = useState('');
    const [image,setImage] = useState('');

    useEffect(()=>{
        const fData = new FormData();
        fData.append('pid',id);
        const url = 'http://server/routes/publication.php';

        axios.post(url,fData).then(res=>res.data).then(({article, price ,description,photos,date})=>{
            setArticle(article);
            setPrice(price);
            setDescription(description);
            setImage(photos);
            setIsLoading(false);
            setDate(date)



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
            
            <div className={style.image_container}>
                <img src={`data:image/png;base64,${image}`} alt="Image" className={style.image} />
            </div>
            <div className={style.article}>
                {article}
            </div>
            <div className="price">
                {price}
            </div>
            <div className="description">
                {description}
            </div>
            <div className={style.time}>
                <span>
                    Was publicated at: {date}
                </span>
            </div>
        </div>
        )
    }


    
}

export default Publication;