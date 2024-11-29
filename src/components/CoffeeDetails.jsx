import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Heading from "./Heading";
import { IoArrowBack } from "react-icons/io5";
import { Helmet } from "react-helmet-async";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  console.log(coffee);
  const {
    _id,
    name,
    supplier,
    price,
    category,
    photo,
    details,
    quantity,
    taste,
  } = coffee || {};
  return (
    <>
      <Helmet>
        <title>Coffee Details | Coffees E-Shop</title>
      </Helmet>
      <div className="bg-addHero py-10">
        <div className="w-10/12 mx-auto">
          <Link to={"/"} className="flex gap-4 justify-start items-center">
            <IoArrowBack className="text-[24px]" />
            <h3 className="text-[24px] font-rancho text-[#374151]">
              Back to Home
            </h3>
          </Link>
        </div>
        <div className="w-10/12 mx-auto my-8 bg-[#F4F3F0] py-[30px] px-[10px] md:py-[60px] md:px-[80px]">
          <Heading title="Coffee Details" description={details} />
          <div className="w-11/12 mx-auto my-8 font-raleway">
            <div className="flex justify-around items-center gap-16 bg-[#F5F4F1] rounded-[10px] py-6 px-8 flex-col md:flex-row">
              <img src={photo} alt={name} className="w-96" />
              <div className="flex justify-center items-start flex-col gap-3">
                <p className="text-[18px] font-normal text-[rgba(27,26,26,0.7)]">
                  <span className="font-rancho text-[#1B1A1A]">Name : </span>
                  {name}
                </p>
                <p className="text-[18px] font-normal text-[rgba(27,26,26,0.7)]">
                  <span className="font-rancho text-[#1B1A1A]">
                    Supplier :{" "}
                  </span>
                  {supplier}
                </p>
                <p className="text-[18px] font-normal text-[rgba(27,26,26,0.7)]">
                  <span className="font-rancho text-[#1B1A1A]">
                    Category :{" "}
                  </span>
                  {category}
                </p>
                <p className="text-[18px] font-normal text-[rgba(27,26,26,0.7)]">
                  <span className="font-rancho text-[#1B1A1A]">Taste : </span>
                  {taste}
                </p>
                <p className="text-[18px] font-normal text-[rgba(27,26,26,0.7)]">
                  <span className="font-rancho text-[#1B1A1A]">
                    Quantity :{" "}
                  </span>
                  {quantity}
                </p>
                <p className="text-[18px] font-normal text-[rgba(27,26,26,0.7)]">
                  <span className="font-rancho text-[#1B1A1A]">Price : </span>
                  {price}/Kg
                </p>
              </div>
              {/* <div className="flex justify-center items-center md:flex-col gap-4 flex-row">
              <Link
                to={`/coffeeDetails/${_id}`}
                className="text-[22px] p-3 border-2 border-[#D2B48C] bg-[#D2B48C] rounded-[5px] text-[#FFFFFF] solid-[#FFFFFF] hover:bg-transparent hover:text-[#D2B48C]"
              >
                <FaRegEye />
              </Link>
              <Link
                to={""}
                className="text-[22px] p-3 border-2 border-[#3C393B] bg-[#3C393B] rounded-[5px] text-[#FFFFFF] solid-[#FFFFFF] hover:bg-transparent hover:text-[#3C393B]"
              >
                <MdModeEdit />
              </Link>
              <Link
                to={""}
                className="text-[22px] p-3 border-2 border-[#EA4744] bg-[#EA4744] rounded-[5px] text-[#FFFFFF] solid-[#FFFFFF] hover:bg-transparent hover:text-[#EA4744]"
              >
                <MdDeleteOutline />
              </Link>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeDetails;
