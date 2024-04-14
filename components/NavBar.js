import React from "react";
import DialogSignIn from "./DialogSignIn";
import Link from "next/link";
import { useSelector } from "react-redux";
import DialogSignOut from "./DialogSignout";

const NavBar = () => {
  const user = useSelector((state) => state.user.email);
  return (
    <nav className="bg-primary">
      <div className="p-4 flex justify-between items-center h-12 w-[70%] mx-auto">
        <Link href="/" className="flex items-center">
          <img src="/realestate.jpg" alt="realestate Logo" className=" h-12" />
        </Link>
        {user ? <DialogSignOut /> : <DialogSignIn />}
      </div>
    </nav>
  );
};

export default NavBar;
