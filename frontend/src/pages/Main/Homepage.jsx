import React, { useContext, useEffect } from "react";
import Nav from "../../components/Nav";
import Main from "../../components/BannerMain";
import { GlobalContext } from "../../context";
function Homepage() {
  return (
    <>
      <Nav />
      <Main />
    </>
  );
}

export default Homepage;
