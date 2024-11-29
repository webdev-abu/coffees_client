import React from "react";

const SectionTitle = ({ slug, title }) => {
  return (
    <div className="flex justify-center items-center gap-2 flex-col">
      <p className="text-[14px] md:text-[20px] font-normal font-raleway text-[#1B1A1A]">
        {slug}
      </p>
      <p className="text-[26px] md:text-[55px] font-normal font-rancho text-[#331A15]">
        {title}
      </p>
    </div>
  );
};

export default SectionTitle;
