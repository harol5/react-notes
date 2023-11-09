import { useState, useEffect } from "react";
import axios from "axios";

function Wordpress() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://www.davidici.com/wp-json/barn2-setup-wizard/v1/woocommerce-product-table"
      );
      console.log(response);
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>posts from wp</h1>
      {/* <lu>{posts && posts.map((post) => <li id={post.id}>{post}</li>)}</lu> */}
    </>
  );
}

export default Wordpress;
