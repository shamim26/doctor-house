import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className=" bg-primary-0 bg-opacity-20 fixed right-0 left-0">
      <div
        className="container md:w-4/5 w-11/12 mx-auto flex items-center
     justify-between  py-3"
      >
        <img src={logo} alt="" />
        <div
          className={`flex absolute md:static  text-white w-full
       md:w-auto  items-center md:items-start
        flex-col md:flex-row gap-6 py-5 md:py-0 md:gap-16 font-semibold ${
          isOpen ? "top-16" : "-top-72"
        }`}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/appointment">Appointment</Link>
          <Link to="/login">Login</Link>
        </div>
        <div className="block md:hidden">
          <Hamburger size={25} color="#fff" toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
