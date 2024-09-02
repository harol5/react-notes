import {
  useEffect,
  useState,
  createContext,
  useContext,
  memo,
  Dispatch,
  SetStateAction,
  useMemo,
  useCallback,
  ReactNode,
} from "react";
import axios from "axios";

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

//this is a custom hook. it fetches post and returns it.
function usePosts(text: string) {
  console.log("usePosts Custom hook called!! --", text);
  const [posts, setPosts] = useState<Posts[]>([]);

  const handleSetPosts = useCallback((posts: Posts[]) => setPosts(posts), []);

  useEffect(() => {
    console.log("usePosts Custom hook -> useEffect called!! -");
    const getPosts = async () => {
      console.log(
        "usePosts Custom hook -> useEffect called!! -> getPOst func started"
      );
      try {
        const { data: posts } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(posts);
      } catch (err) {
        console.log(err);
      } finally {
        console.log(
          "usePosts Custom hook -> useEffect called!! -> getPOst func completed"
        );
      }
    };
    getPosts();
  }, []);

  const obj = useMemo(
    () => ({ posts, handleSetPosts }),
    [posts, handleSetPosts]
  );

  return obj;
}

//this creates a context and the value passed to the function-call will be the value.
const PostsContext = createContext<{
  posts: Posts[];
  handleSetPosts: (posts: Posts[]) => void;
}>({
  posts: [],
  handleSetPosts: () => undefined,
});

//this creates a provider components using the conxtext previously created.
const PostsProvider = ({ children }: { children: ReactNode }) => {
  console.log("PostsProvider Component ===");
  const data = usePosts("calling from contex");
  console.log(data);
  return <PostsContext.Provider value={data}>{children}</PostsContext.Provider>;
};

//then, you must wrapped the components you want to -
//share the state with.
function Context() {
  console.log("Context Component ===");
  const [count, setCount] = useState(0);

  return (
    <PostsProvider>
      <h1>Using context API</h1>
      <h1>counter:</h1>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        change counter
      </button>
      <PostLists />;
    </PostsProvider>
  );
}

export default Context;

//this is a funtional component.
const PostLists = memo(() => {
  console.log("PostLists Component ===");
  const { posts } = useContext(PostsContext);
  return (
    <div>
      <Stats />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
});

const Stats = memo(() => {
  console.log("Stats Component ===");
  const { posts } = useContext(PostsContext);

  const [query, setQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  let maxLength = useMemo(() => {
    let crrMaxLength = 0;
    filteredPosts.forEach((post) => {
      const titleLength = post.title.length;
      crrMaxLength = titleLength > crrMaxLength ? titleLength : crrMaxLength;
    });

    return crrMaxLength;
  }, [filteredPosts]);

  function handleQuery(value: string): void {
    const filteredPosts = posts.filter((post) => post.title.includes(value));
    setFilteredPosts(filteredPosts);
    setQuery(value);
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", overflow: "auto" }}>
      <div>
        <h3>longest title</h3>
        <p>{maxLength}</p>
      </div>
      <div>
        <label htmlFor="">posts contain:</label>
        <input
          type="text"
          name="query"
          value={query}
          onChange={(e) => handleQuery(e.target.value)}
        />
      </div>
    </div>
  );
});

/**
 * SAMPLE CONSOLE LOG:
 * First Render
 * 
 *  Context Component ===
    Context.tsx:13 usePosts Custom hook called!! --
    Context.tsx:53 PostLists Component ===
    Context.tsx:68 Stats Component ===
    Context.tsx:16 usePosts Custom hook -> useEffect called!! -
    App.js:16 App useEffect;
    Context.tsx:40 Context Component ===
    Context.tsx:13 usePosts Custom hook called!! --
    Context.tsx:53 PostLists Component ===
    Context.tsx:68 Stats Component ===
 */
