import React from "react";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import Info from "../Info/Info";
import Testimonial from "../Testimonial/Testimonial";
import Doctors from "../Doctors/Doctors";

const Home = () => {
  return (
    <>
      <div className="bg-primary-0 h-screen">
        <Banner />
      </div>
      <Service />
      <Info />
      <Testimonial />
      <Doctors />
    </>
  );
};

export default Home;
