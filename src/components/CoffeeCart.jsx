import React from "react";
import { FaRegEye } from "react-icons/fa";
import { MdDeleteOutline, MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const coffeeCart = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, supplier, price, category, photo } = coffee || {};
  const handleDeleteCoffee = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-server-ozxy.onrender.com/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((coffee) => coffee._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="flex justify-between items-center gap-6 bg-[#F5F4F1] rounded-[10px] py-6 px-8 flex-col md:flex-row">
      <img src={photo} alt={name} />
      <div className="flex justify-center items-start flex-col gap-3">
        <p className="text-[18px] font-normal text-[rgba(27,26,26,0.7)]">
          <span className="font-rancho text-[#1B1A1A]">Name : </span>
          {name}
        </p>
        <p className="text-[18px] font-normal text-[rgba(27,26,26,0.7)]">
          <span className="font-rancho text-[#1B1A1A]">Supplier : </span>
          {supplier}
        </p>
        <p className="text-[18px] font-normal text-[rgba(27,26,26,0.7)]">
          <span className="font-rancho text-[#1B1A1A]">Category : </span>
          {category}
        </p>
        <p className="text-[18px] font-normal text-[rgba(27,26,26,0.7)]">
          <span className="font-rancho text-[#1B1A1A]">Price : </span>
          {price}/Kg
        </p>
      </div>
      <div className="flex justify-center items-center md:flex-col gap-4 flex-row">
        <Link
          to={`/coffeeDetails/${_id}`}
          className="text-[22px] p-3 border-2 border-[#D2B48C] bg-[#D2B48C] rounded-[5px] text-[#FFFFFF] solid-[#FFFFFF] hover:bg-transparent hover:text-[#D2B48C]"
        >
          <FaRegEye />
        </Link>
        <Link
          to={`/coffeeUpdate/${_id}`}
          className="text-[22px] p-3 border-2 border-[#3C393B] bg-[#3C393B] rounded-[5px] text-[#FFFFFF] solid-[#FFFFFF] hover:bg-transparent hover:text-[#3C393B]"
        >
          <MdModeEdit />
        </Link>
        <Link
          to={""}
          onClick={() => handleDeleteCoffee(_id)}
          className="text-[22px] p-3 border-2 border-[#EA4744] bg-[#EA4744] rounded-[5px] text-[#FFFFFF] solid-[#FFFFFF] hover:bg-transparent hover:text-[#EA4744]"
        >
          <MdDeleteOutline />
        </Link>
      </div>
    </div>
  );
};

export default coffeeCart;
