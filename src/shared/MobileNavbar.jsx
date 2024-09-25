import { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenuLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { HiMiniXMark } from "react-icons/hi2";
import { AiOutlineShop } from "react-icons/ai";
import React from "react";
import { FaAppStore, FaFacebookF } from "react-icons/fa6";
import Div from "../components/Div";
import Image from "../components/Image";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const routing = (
    <>
      <Link
        to="/"
        className="cursor-pointer  font-semibold flex items-center gap-2  border-b pb-1 border-b-gray-400  hover:text-yellow-400 duration-300mb-2 "
      >
        <IoHomeOutline className="text-xl" /> Home
      </Link>
      <Link
        to="/"
        className=" cursor-pointer mb-2 font-semibold flex items-center gap-2  border-b pb-1 border-b-gray-400 hover:text-yellow-400 duration-300 "
      >
        <AiOutlineShop className="text-xl" /> Product
      </Link>

      <Link
        to="/"
        className="flex cursor-pointer items-center gap-2 ml-0.5 mb-2 font-semibold border-b pb-1 border-b-gray-400   hover:text-yellow-400 duration-300 "
      >
        <FaAppStore className="text-lg" /> About Us
      </Link>
      <Link
        to="/"
        className="flex cursor-pointer items-center gap-2 ml-0.5 mb-2 font-semibold border-b pb-1 border-b-gray-400   hover:text-yellow-400 duration-300 "
      >
        <FaAppStore className="text-lg" /> Contact Us
      </Link>
    </>
  );

  return (
    <Div className=" ">
      <Div className=" bg-[#333] block lg:hidden fixed z-10 top-0 right-0 left-0 w-full  shadow-md py-6">

        <Div className="flex justify-between text-white  items-center mx-4 ">
          <Button
            onClick={toggleMenu}
            className=" cursor-pointer  focus:outline-none flex gap-1 items-center hover:text-yellow-400 duration-300"
          >
            <RiMenuLine className="text-xl text-primary" />
            <Paragraph className="text-lg font-semibold text-primary">Menu</Paragraph>
          </Button>
          
            <Image src={"https://steadfastcourier.com/icon/steadfast-courier-White.png"} alt="" className=" w-32" />
          
        </Div>
      </Div>
      {/* Menu */}
      <Div
        className={`-top-1 py-4 fixed  duration-700 bg-white w-2/3 md:w-1/3 h-screen  z-[999]  ${
          isMenuOpen ? "left-0" : "-left-[2000px] "
        }`}
      >
        <Div className={`relative`}>
          {/* Menu Content */}
          <Div>
            <ul className="px-4 ">
              <Button
                onClick={toggleMenu}
                className=" text-primary focus:outline-none py-2 w-full"
              >
                {isMenuOpen && (
                  <Div className="flex justify-between border-b pb-1  border-b-gray-400  ">
                    <Paragraph className="text-lg font-semibold">Menu</Paragraph>
                    <HiMiniXMark className=" h-6 w-6 mr-2 hover:text-red-600 duration-300" />
                  </Div>
                )}
              </Button>
              <li
                className="flex flex-col "
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                {routing}
              </li>
              <li
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
              </li>
            </ul>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default MobileNavbar;