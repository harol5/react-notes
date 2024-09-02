import { ChangeEvent, useState } from "react";
import axios from "axios";
import CarCard from "./CarCard";

interface Cars {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

function Demo() {
  const [data, setData] = useState<Cars[]>();
  const [param, setParam] = useState<string>();

  const getData = async () => {
    console.log(param);
    try {
      const { data } = await axios.get(
        `https://api.api-ninjas.com/v1/cars?year=${param}`,
        {
          headers: {
            "X-Api-Key": "gLLkd4X8cKMO8M5RunKMYw==Qh3zrcycR8dHoxHo",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleParam = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(e);
    setParam(e.target.value);
  };

  return (
    <article>
      <h1>Api</h1>
      <pre>
        <code style={{ color: "white" }}>{JSON.stringify(data)}</code>
      </pre>
      <input type="text" name="param" onChange={(e) => handleParam(e)} />
      <button onClick={getData}>GET DATA</button>
      <section>
        {data?.map((car, index) => (
          <CarCard car={car} index={index + 1} />
        ))}
      </section>
    </article>
  );
}

export default Demo;

// function x<T>(a: T): T {
//   return a;
// }

// console.log(x<{ name: string }>({ name: "harol" }));
