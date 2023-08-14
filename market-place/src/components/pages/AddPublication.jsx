import { useState } from "react";
import axios from 'axios';
import api from "../../path";
function AddPublication(){
    const [photos,setPhotos] = useState([]);
    const [article,setArticle] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState(0);
    const [message,setMessage] = useState('');

    function dataChecker(){
        let res = true;

        if(article.length<=3 || article.length>=30 || description.length>=500 || price<0){
            res = false;
        }

        return res;
    }


    async function addPublicationHendler(){
        
        if(dataChecker()){
            let fData = new FormData();
            for(let index in photos){
                fData.append(`image${index}`,photos[index]);
            }
            fData.append('article',article);
            fData.append('price',price);
            fData.append('description',description);
            fData.append('uid',sessionStorage.getItem('uid'));
            const url = api+"/server/routes/createpublication.php";
            await axios.post(url,fData);
        }else{
            setMessage(<p className="error">Something went wrong, try again)</p>);
        }
        
        
    }
    
    if(sessionStorage.length!==0){
       return(
        <div className="addpublication">
            <div className="form">
                {message}
                <input name="image" multiple type="file" accept="image/png, image/jpeg" placeholder="Image" onChange={e=>{
                    setPhotos(e.target.files)
                }}/>

                <input name="article" type="text" placeholder="Article of product" onChange={e=>setArticle(e.target.value)}/>
                <input name="price" type="number" placeholder="Price" onChange={e=>setPrice(e.target.value)}/>
                <input name="description" type="text" placeholder="Description" onChange={e=>setDescription(e.target.value)}/>

                <button name="submit" onClick={addPublicationHendler}>Submit</button>
            </div>

        </div>
    ) 
    }else{
        return(
            <div>
                <h1>This page is not avaible! :(</h1>
            </div>
        )
    }

    
}
export default AddPublication;