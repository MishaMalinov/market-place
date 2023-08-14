import axios from 'axios';
import api from "../../path";

import style from '../styles/Post.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Post({ article, price, photos,id }) {
    // console.log(photos)
    const [images, setImages] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const fData = new FormData();
        const url = api+'/server/routes/image.php';
        fData.append('path', photos.split(';')[0]);
        axios.post(url, fData).then(res => setImages(res.data));
        setIsLoading(false);
    })

    if (isLoading) {
        return (
            <div className="loading">
                Loading...
            </div>
        )
    } else {
        return (
            <div className={style.post}>
                <div className={style.image_container}>
                    <Link to={`/publication?id=${id}`} className={style.link}><img src={`data:image/png;base64,${images}`} alt="Image" className={style.image} /></Link>
                    
                </div>
                <div className={style.article_contaiter}>
                    <Link to={`/publication?id=${id}`} className={style.link}><h1 className="article">{article}</h1></Link>
                </div>
                <div className={style.price_container}>
                    <div className="price"><b>Price:</b> {price}</div>
                </div>
                

            </div>
        );
    }

}

export default Post;