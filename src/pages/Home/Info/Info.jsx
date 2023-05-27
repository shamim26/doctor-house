import React from "react";
import icon1 from "../../../assets/icons/clock.png";
import icon2 from "../../../assets/icons/location.png";
import icon3 from "../../../assets/icons/dial.png";

const Info = () => {
  return (
    <div className="container w-4/5 mx-auto my-32">
      <div className="flex justify-evenly text-white">
        <div className="bg-primary-0 flex items-center gap-5 p-12 rounded-lg">
          <img src={icon1} alt="" />
          <p>
            <span className="font-bold text-lg block">Opening Hours</span>
            Open 9.00 am to 5.00pm <br /> Everyday
          </p>
        </div>
        <div className="bg-secondary-0 flex items-center gap-5 p-12 rounded-lg">
          <img src={icon2} alt="" />
          <p>
            <span className="font-bold text-lg block">Our Locations</span>
            Dhanmondi 17, Dhaka <br /> -1200, Bangladesh
          </p>
        </div>
        <div className="bg-primary-0 flex items-center gap-5 p-12 rounded-lg">
          <img src={icon3} alt="" />
          <p>
            <span className="font-bold text-lg block">Contact Us</span>
            +88 01750 00 00 00 <br /> +88 01750 00 00 00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
