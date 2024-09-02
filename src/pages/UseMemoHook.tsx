import { useMemo, useRef, useState } from "react";

function calFibb(position: number): number {
  const map = new Map();

  const getFibb = (position: number): number => {
    if (position < 2) return position;
    if (map.has(`position ${position}`)) return map.get(`position ${position}`);

    let numOne: number = getFibb(position - 1);
    map.set(`position ${position - 1}`, numOne);

    let numTwo: number = getFibb(position - 2);
    map.set(`position ${position - 2}`, numTwo);

    return numOne + numTwo;
  };

  const fibb = getFibb(position);
  console.log("cached values:", map);

  return fibb;
}

export default function UseMemoHook() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [position, setPosition] = useState<number>(3);

  const fibb = useMemo(() => calFibb(position), [position]);

  const handlePosition = () => {
    const position: number = Number.parseInt(inputRef.current?.value!);

    console.log("position:", position);
    setPosition(position);
  };

  return (
    <div>
      <label>Enter fibb posititon</label>
      <input type="text" name="position" ref={inputRef} />
      <button onClick={handlePosition}>submit</button>
      <br />
      <p>fibb at position {position};</p>
      <span>{fibb}</span>
    </div>
  );
}
