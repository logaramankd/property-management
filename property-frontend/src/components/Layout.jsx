import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Sidebar />
      <main className="ml-64 mt-16 p-6">{children}</main>
    </div>
  );
};

export default Layout;
