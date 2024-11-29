import React from "react";

const BrandIcon = ({ logo, title, description }) => {
  return (
    <div className="">
      <img src={logo} alt="Logo" className="w-[70px] h-[70px]" />
      <h3 className="text-[35px] font-rancho font-normal text-[#331A15]">
        {title}
      </h3>
      <p className="text-[16px] font-normal font-raleway text-[#1B1A1A]">
        {description}
      </p>
    </div>
  );
};

export default BrandIcon;
