import { useEffect, useState, memo } from "react";
import TestSecond from "./TestSecond";

const Test = ({ data, onPrintName: printParentName }) => {
  console.log("TEST Component");
  console.log(data);
  const [state, setState] = useState(1);
  useEffect(() => {
    console.log("Test useEffect");
  }, []);
  return (
    <>
      <h1>test component</h1>
      <p>{state}</p>
      <button onClick={() => setState((prev) => prev + 1)}>update state</button>
      <button onClick={() => printParentName()}>Print parent name</button>
      <TestSecond />
    </>
  );
};

// if ancestor state changes, this component will only rerender if prop changes.
export default memo(Test);
