import { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

//this is a custom hook. it fetches post and returns it.
function usePosts() {
  const [posts, setPosts] = useState<Posts[]>([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data: posts } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(posts);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);
  return { posts };
}

//this creates a context and the value passed on the function call will be the value.
const PostsContext = createContext({
  posts: [] as Posts[],
});

//this is a funtional component.
function PostLists() {
  const { posts } = useContext(PostsContext);
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

//then, you must wrapped the components you want to -
//share the state with.
function Context() {
  return (
    <PostsContext.Provider value={usePosts()}>
      <PostLists />;
    </PostsContext.Provider>
  );
}
export default Context;
