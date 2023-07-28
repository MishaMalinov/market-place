import axios from "axios";
import { useEffect, useState } from "react";
import style from '../styles/Publications.module.css';
import Post from "./Post";
function Publications() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fData = new FormData();
    fData.append("publications", "1");
    const url = "http://localhost:80/server/routes/publications.php";
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
