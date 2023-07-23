import axios from "axios";
import { useEffect, useState } from "react";

function Publications() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Remove useRef as it is not needed
  function Post({ article, price, description }) {
    return (
      <div className="post">
        <h1 className="article">{article}</h1>
        <div className="price">{price}</div>
        <div className="description">{description}</div>
      </div>
    );
  }

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
      <div className="publications">
        {/* Loop through the posts state to render Post components */}
        {posts.map((el, index) => (
          <Post
            key={index}
            article={el.article}
            price={el.price}
            description={el.description}
          />
        ))}
      </div>
    );
  }
}

export default Publications;
