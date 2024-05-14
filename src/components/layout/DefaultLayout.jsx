import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

const DefaultLayout = ({ children, pageTitle }) => {
  return (
    <div>
      {/* header */}
      <Header />
      <Container>
        <main className="p-2 ">{pageTitle}</main>
        <main className="main ">{children}</main>
      </Container>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
