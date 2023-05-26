import React from "react";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";

const Home = () => {
  return (
    <>
      <div className="bg-primary-0 h-screen">
        <Banner />
      </div>
      <Service />
    </>
  );
};

export default Home;
