import React from "react";
import Routes from "../../Routes/Routers";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div>
      <Header />

      {/* {showCart && <Carts />} */}

      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
