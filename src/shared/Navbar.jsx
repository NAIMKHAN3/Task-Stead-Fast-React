import { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Div from "../components/Div";
import Image from "../components/Image";
import Paragraph from "../components/Paragraph";
import MobileNavbar from "./MobileNavbar";


const routing = (
  <>
    <Link to={"/"} className="hover:text-yellow-400 duration-300">
      Home
    </Link>
    <Link to={"/products"} className="hover:text-yellow-400 duration-300">
      Products
    </Link>
    <Link to={"/"} className="hover:text-yellow-400 duration-300">
      About
    </Link>
    <Link to={"/"} className="hover:text-yellow-400 duration-300">
      Login
    </Link>
  </>
);

const Navbar = () => {


  return (
    <Div
      className={`w-full bg-[#333] lg:py-2 shadow  transition-all duration-500`}
    >
      <Div className=" px-2">
        <Div className="flex justify-center lg:justify-between items-center px-4 text-white font-medium">
          <Div className="">
            <Image src={"https://steadfastcourier.com/icon/steadfast-courier-White.png"} alt="" className="h-16 w-40" />
          </Div>
          <Div className="lg:flex gap-4 hidden">
            {routing}
            <Div
              className="flex gap-2 hover:text-gray-500 cursor-pointer duration-150"
            >
              <Div className="relative ">
                <Link to={"/cart"}>
                  {" "}
                  <IoCartOutline className="text-2xl" />
                </Link>
                <Paragraph className="absolute top-0 right-0 bg-primary text-white text-xs mt-[-5px] mr-[-5px] rounded-full border-0 h-4 w-4 text-center">
                  0
                </Paragraph>
              </Div>
        
            </Div>
          </Div>
        </Div>
          <MobileNavbar/>
      </Div>
    </Div>
  );
};

export default Navbar;