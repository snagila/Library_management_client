import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      {/* header */}
      <Header />
      <main className="main ">{children}</main>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
