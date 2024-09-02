import { useEffect, useState } from "react";

const TestSecond = () => {
  console.log("TESTSecond Component");
  const [state, setState] = useState(1);
  useEffect(() => {
    console.log("TestSecond useEffect");
  }, []);
  return (
    <>
      <h1>test second component</h1>
      <p>{state}</p>
      <button onClick={() => setState((prev) => prev + 1)}>update state</button>
    </>
  );
};

export default TestSecond;
