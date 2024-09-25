import React from "react";
import Div from "../Div";
import Image from "../Image";
import Heading from "../Heading";
import Paragraph from "../Paragraph";

const Card = ({ item }) => {
  return (
    <Div
      key={item.id}
      className="bg-gray-200 hover:bg-yellow-200 rounded-md p-4 hover:drop-shadow-2xl duration-300 hover:-translate-y-1 cursor-pointer"
    >
      <Image className="w-full h-52 rounded-md" src={item.img} alt="" />
      <Heading className=" text-center font-bold mt-3 text-lg">
        {item.name}
      </Heading>
      <Paragraph className="text-center">{item.description.slice(0,20)}...</Paragraph>
      <Paragraph className="text-center font-bold">
        Price: ${item.price}
      </Paragraph>
      <button className="w-full bg-[#333] py-1 rounded-md my-2 text-white hover:bg-yellow-400 duration-300 hover:text-[#333] font-semibold">Order Now</button>
    </Div>
  );
};

export default Card;
