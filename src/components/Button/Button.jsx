import React from "react";

const Button = ({ children }) => {
  return (
    <button
      className="bg-secondary-0 py-4 px-7
     rounded-lg font-semibold text-white hover:bg-orange-800 transition-all duration-300 "
    >
      {children}
    </button>
  );
};

export default Button;
