import { useReducer } from "react";

function UseReducerHook() {
  let id = 1;
  const newPost = {
    name: "",
    comment: "",
    allPost: [],
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "set-name":
        return {
          ...state,
          name: action.payload.name,
        };

      case "set-comment":
        return {
          ...state,
          comment: action.payload.comment,
        };

      case "add-post":
        return {
          ...state,
          allPost: [
            ...state.allPost,
            { name: state.name, comment: state.comment },
          ],
          name: "",
          comment: "",
        };

      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, newPost);

  const postHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "add-post" });
  };

  const callingDispatchFunc = () => {
    dispatch({ type: "set-name", payload: { name: "juan" } });
    dispatch({
      type: "set-comment",
      payload: { comment: "this is a test" },
    });
  };
  console.log(state);
  return (
    <div className="hook-style">
      <h1>useReducer Hook</h1>

      <form onSubmit={postHandler}>
        <p>
          <label>Your name:</label>
          <input
            type="text"
            name="firstDigit"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: "set-name", payload: { name: e.target.value } })
            }
          />
        </p>
        <p>
          <label>Your Comment</label>
          <textarea
            rows="4"
            cols="50"
            value={state.comment}
            onChange={(e) =>
              dispatch({
                type: "set-comment",
                payload: { comment: e.target.value },
              })
            }
          ></textarea>
        </p>
        <button>Post</button>
      </form>

      <button onClick={callingDispatchFunc}>test</button>

      <section>
        <h2>Posts</h2>
        {state.allPost.map((p) => (
          <div key={id++} className="card">
            <h3>{p.name}</h3>
            <p>{p.comment}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
export default UseReducerHook;
