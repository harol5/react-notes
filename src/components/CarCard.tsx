import { useState } from "react";

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

interface CarCardProps {
  car: Cars;
  index: number;
}

export default function CarCard({ car, index }: CarCardProps) {
  const [total, setTotal] = useState<number>();

  const handleTotal = (qty: number, price: number) => {
    console.log(`index: ${index}, model: ${car.model}, total: ${total}`);
    setTotal(qty * price);
  };
  return (
    <div key={index} style={{ backgroundColor: "lightgray", color: "black" }}>
      <h1>{car.make}.</h1>
      <p>{car.model}.</p>
      <p>{car.year}.</p>
      <p>{index}</p>
      <input
        type="number"
        name="qty"
        onChange={(e) => handleTotal(Number.parseInt(e.target.value), index)}
      />
      <span>{total}</span>
    </div>
  );
}
