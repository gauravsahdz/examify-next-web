import ImageWrapper from "@components/ImageWrapper";
import React from "react";
import { AiFillNotification } from "react-icons/ai";
import { FiSearch, FiSettings } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex items-center gap-2 w-full max-w-md">
        <div className="relative flex-grow  shadow-md rounded-md">
          <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="p-3 pl-10 bg-gray-100 rounded-lg w-full focus:outline-brand-accent focus:bg-white"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 shadow-md rounded-md p-2">
        <ImageWrapper
          src=""
          alt="profile"
          className="rounded-full"
          width={30}
          height={30}
          fallbackSrc="/assets/images/avatar.png"
          divStyle="bg-gray-100 p-1 rounded-full cursor-pointer hover:bg-gray-200"
        />
        <p className="text-sm">John Doe</p>
        <AiFillNotification className="text-xl text-gray-600 cursor-pointer hover:text-brand-primary" />
        <FiSettings className="text-xl text-gray-600 cursor-pointer hover:text-brand-primary" />
      </div>
    </header>
  );
};

export default Navbar;
