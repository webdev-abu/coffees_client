import React from "react";

const Heading = ({ title, description }) => {
  return (
    <div className="flex justify-between items-center gap-8 flex-col">
      <h1 className="text-[45px] font-normal text-[#374151] text-center">
        {title}
      </h1>
      <p className="text-[18px] font-normal text-[rgba(27,26,26,0.7)] text-center md:px-24">
        {description}
      </p>
    </div>
  );
};

export default Heading;
