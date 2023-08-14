import axios from "axios";
import {useState,useEffect, useRef} from 'react';
import api from "../../path";
import style from '../styles/Publication.module.css'
function Publication(){
    const queryParameters = new URLSearchParams(window.location.search)
    const [message,setMessage] = useState('');
    const id = queryParameters.get('id');
    const [isActive,setIsActive] = useState(true);
    const [activateBtn,setActivateBtn] = useState('');
    const [isLoading,setIsLoading] = useState(true);
    const [article,setArticle] = useState('asdf');
    const [price,setPrice] = useState('');
    const [deletePublication,setDeletePublication] = useState(false);
    const [description,setDescription] = useState('');
    const [date,setDate] = useState('');
    const [image,setImage] = useState('');
    const [render,setRender] = useState(Math.random());
    const checker = useRef('');
    function activatePublicationHandle(){
        const url = api+`/server/routes/change_in_stock.php?id=${id}`
        const fData = new FormData();
        fData.append('in_stock','1');
        axios.post(url,fData).then(res=>{
            // window.location.reload();
            setRender(Math.random());
        });


    }
    function deletePublicationHandler() {
        // console.log(checker.current)
        // console.log(sessionStorage.getItem('password'))
        if(checker.current===sessionStorage.getItem('password')){
            const url = api+`/server/routes/change_in_stock.php?id=${id}`
            const fData = new FormData();
            fData.append('in_stock','0');
            axios.post(url,fData).then(res=>{
                // console.log(res.data)
                // console.log('Publication was deleted))');
                setRender(Math.random());

            });

        }else{
            console.log('Wrong password');
            setMessage(<p className="error">Wrong password</p>);
        }
    }
    function deleteBtnHandler(){
        
        setDeletePublication(<>
            <input type="password" placeholder="password" onChange={e=>{
                checker.current = e.target.value;
            }}/>
            <button onClick={deletePublicationHandler}>Confirm</button>
        </>)
    }
    useEffect(()=>{
        setMessage('');
        const fData = new FormData();
        fData.append('pid',id);
        const url = api+'/server/routes/publication.php';

        axios.post(url,fData).then(res=>res.data).then(({article, price ,description,photos,date,owner,in_stock})=>{
            setIsActive(+in_stock);
            setDeletePublication(owner===sessionStorage.getItem('uid')&& +in_stock?<button style={{backgroundColor:"red",color:'white',border:'1px solid white',borderRadius:'4px',height:'30px'}} onClick={deleteBtnHandler}>Delete Publication</button>:'')
            setArticle(article);
            setPrice(price);
            setDescription(description);
            setImage(photos);
            
            setDate(date)
            if(!+in_stock){
                setActivateBtn(<button onClick={activatePublicationHandle} style={{backgroundColor:"green",color:'white',border:'1px solid white',borderRadius:'4px',height:'30px'}}>Activate</button>)
            }

            setIsLoading(false);
        });
        
    },[render])

    if(isLoading){
        return(
            <div>
                Loading...
            </div>
        )
    }else{
        return(
        <div className="publication" style={{opacity:isActive?1:0.8}}>
            {!isActive&& <h1>Publication is disabled</h1>}
            <div className={style.image_container} >
                <img src={`data:image/png;base64,${image}`} alt={article} className={style.image} />
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
            {
                deletePublication || activateBtn
            }

            {
                message
            }
        </div>
        )
    }


    
}

export default Publication;