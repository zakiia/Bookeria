import React from "react";
import Services from "../Services/Services";
import Banner from "../Banner/Banner";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
    </div>
  );
};

export default Home;
