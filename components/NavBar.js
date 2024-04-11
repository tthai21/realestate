import React from "react";
import DialogSignIn from "./DialogSignIn";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-primary">
      <div className="bg-primary p-4 flex justify-between items-center h-12 w-[70%] mx-auto">
        <Link href="/" className="flex items-center">
          <img src="/realestate.jpg" alt="realestate Logo" className=" h-12" />
        </Link>

        <div className="flex items-center space-x-10">
          <a
            href="#"
            className="text-white hover:text-secondary font-bold text-lg"
          >
            Buy
          </a>
          <a
            href="#"
            className="text-white hover:text-secondary font-bold text-lg"
          >
            Rent
          </a>
        </div>

        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 rounded-md bg-white text-black focus:outline-none focus:bg-white"
          />
          <button className="ml-2 px-3 py-1 rounded-md bg-secondary text-white hover:bg-white hover:text-secondary focus:outline-none">
            Search
          </button>
        </div>

        <DialogSignIn />
      </div>
    </nav>
  );
};

export default NavBar;
