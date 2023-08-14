import axios from "axios";
import { useEffect, useState } from "react";
import api from "../../path.js";

import style from '../styles/Publications.module.css';
import Post from "./Post";
import Filter from "./Publications/Filter";
function Publications() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //TODO: доробити фільтер
  useEffect(() => {
    const fData = new FormData();

    fData.append("publications", "1");

    

    let url='';
    if(!(sessionStorage.getItem('price_minimum')&&sessionStorage.getItem('price_maximum'))){

      url = api+"/server/routes/preloadMinMax.php";
      fData.append('minmax','1');
      axios.post(url,fData).then(res=>res.data).then(data=>{

      sessionStorage.setItem('price_low',data['min']);
      sessionStorage.setItem('price_minimum',data['min']);

      sessionStorage.setItem('price_high',data['max']);
      sessionStorage.setItem('price_maximum',data['max']);

    });
    }
    

    url = api+"/server/routes/publications.php?";
    // remember filter in sessionStorage 
    
    if(sessionStorage.getItem('price_low') || sessionStorage.getItem('price_high')){
      url+=`low=${sessionStorage.getItem('price_low')}&high=${sessionStorage.getItem('price_high')}`;

      fData.append('filter','true')
    }
    axios.post(url, fData).then((res) => {
      // Update state directly with the response data
      setPosts(res.data);
      setIsLoading(false);
    });
    


  }, []); // Empty dependency array to ensure this effect runs only once

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  } else {
    return (
      <div className={style.publications}>
        <Filter setPosts={setPosts} setIsLoading={setIsLoading} />
        <div className={style.head}>
          <h1 className={style.title}>All publications</h1>
        </div>

        <div className={style.posts}>
          {posts.map((el, index) => (
          <Post
            key={index}
            article={el.article}
            price={el.price}
            description={el.description}
            photos={el.photos}
            id={el.pid}
          />
        ))}
        </div>
        
      </div>
    );
  }
}

export default Publications;
