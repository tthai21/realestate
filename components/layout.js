import NavBar from "@/components/NavBar";
import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
