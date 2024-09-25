import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Div from "../Div";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Button from "../Button";
const Banner = () => {
  return (
    <Div
      id="home"
      className="bg-[url('https://i.ibb.co/gtnVwYF/bunch-black-friday-gifts-golden-shopping-cart-with-copy-space.jpg')] bg-cover h-[90vh] flex justify-center md:justify-end items-center text-center"
    >
      <Div className="banner-content px-3">
        <Heading className="text-yellow-400 text-2xl md:text-4xl font-semibold">
          Welcome to Stead Fast
        </Heading>
        <Paragraph className="text-yellow-400 text-base md:text-2xl my-2">
          Buy One Get One Free.
        </Paragraph>
        <Button className="mt-4 mx-auto text-white font-semibold bg-gray-800 hover:bg-yellow-400 hover:text-black transition-all duration-400 ease-in-out px-4 py-2 rounded-full md:px-4 md:py-2 md:text-lg flex justify-items-center items-center gap-2">
          GET STARTED
          <FaLongArrowAltRight />
        </Button>
      </Div>
    </Div>
  );
};

export default Banner;
