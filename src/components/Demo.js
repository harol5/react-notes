import { useState } from "react";

function Demo(props) {
  const [count, setCount] = useState(0);
  return (
    <article>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button
        onClick={() => setCount(count - 1)}
        disabled={count === 0 ? "disabled" : null}
      >
        decrease
      </button>
    </article>
  );
}

export default Demo;
