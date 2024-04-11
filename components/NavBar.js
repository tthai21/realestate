import React from "react";
import DialogSignIn from "./DialogSignIn";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-primary">
      <div className="bg-primary p-4 flex justify-between items-center h-12 w-[70%] mx-auto">
        <Link href="/" className="flex items-center">
          <img src="/realestate.png" alt="realestate Logo" className=" h-12" />
        </Link>

        <div className="flex items-center space-x-6">
          <a href="#" className="text-white hover:text-gray-300">
            Buy
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Rent
          </a>
        </div>

        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-600"
          />
          <button className="ml-2 px-3 py-1 rounded-md bg-gray-700 text-white hover:bg-gray-600 focus:outline-none">
            Search
          </button>
        </div>

        <DialogSignIn />
      </div>
    </nav>
  );
};

export default NavBar;
