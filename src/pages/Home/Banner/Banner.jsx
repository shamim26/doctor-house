import React from "react";
import Button from "../../../components/Button/Button";
import banner from "../../../assets/banner.png";

const Banner = () => {
  return (
    <div className="container w-4/5 mx-auto flex justify-center items-center pt-32">
      <div className="text-white space-y-5">
        <h1 className="text-6xl font-semibold">
          Your Best Medical Help Center
        </h1>
        <p>
          Lorem Ipsum is simply dummy text they are printing typesetting has
          been the industry’s stardard.
        </p>
        <Button>All Service</Button>
      </div>
      <img src={banner} alt="" />
    </div>
  );
};

export default Banner;
