import React, { useEffect, useState } from "react";
import Card from "./Card";
import Div from "../Div";
import Heading from "../Heading";

const Neckband = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("neckband.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <Div className="my-5">
      <Heading className="text-center text-2xl font-bold my-5">
        Neckband Product
      </Heading>
      <Div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-4">
        {data.map((item) => (
          <Card item={item} />
        ))}
      </Div>
    </Div>
  );
};

export default Neckband;
