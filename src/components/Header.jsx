import React from "react";
import Logo from "../assets/images/more/logo1.png";

const Header = () => {
  return (
    <div className="bg-hero py-4 flex justify-center items-center">
      <img
        src={Logo}
        className="w-[45px] h-[55px] md:w-[75px] md:h-[90px]"
        alt="Logo"
      />
      <h1 className="text-[34px] md:text-[60px] font-rancho text-[#FFFFFF] ml-2">
        Espresso Emporium
      </h1>
    </div>
  );
};

export default Header;
