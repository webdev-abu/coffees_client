import React from "react";
import Heading from "./Heading";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);
    fetch("http://localhost:3000/addCoffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Coffee Added successfully !",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="bg-addHero py-10">
      <div className="w-10/12 mx-auto">
        <Link to={"/"} className="flex gap-4 justify-start items-center">
          <IoArrowBack className="text-[24px]" />
          <h3 className="text-[24px] font-rancho text-[#374151]">
            Back to Home
          </h3>
        </Link>
      </div>
      <div className="w-10/12 mx-auto my-8 bg-[#F4F3F0] py-[60px] px-[80px]">
        <Heading
          title="Add New Coffee"
          description="It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here."
        />
        <div className="w-11/12 mx-auto my-8 font-raleway">
          <form onSubmit={handleAddCoffee} className="">
            <div className="flex gap-6 my-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="text-[20px] font-semibold text-[#1B1A1A]">
                    Coffee Name
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Coffee Name"
                    className="input input-bordered w-full"
                    name="name"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="text-[20px] font-semibold text-[#1B1A1A]">
                    Available Quantity
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Available Quantity"
                    className="input input-bordered w-full"
                    name="quantity"
                  />
                </label>
              </div>
            </div>

            <div className="flex gap-6 my-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="text-[20px] font-semibold text-[#1B1A1A]">
                    Coffee Supplier
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Enter Coffee Supplier"
                    className="input input-bordered w-full"
                    name="supplier"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="text-[20px] font-semibold text-[#1B1A1A]">
                    Coffee Taste
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Enter Coffee Taste"
                    className="input input-bordered w-full"
                    name="taste"
                  />
                </label>
              </div>
            </div>

            <div className="flex gap-6 my-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="text-[20px] font-semibold text-[#1B1A1A]">
                    Coffee Category
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Enter Coffee Category"
                    className="input input-bordered w-full"
                    name="category"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="text-[20px] font-semibold text-[#1B1A1A]">
                    Coffee Details
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Enter Coffee Details"
                    className="input input-bordered w-full"
                    name="details"
                  />
                </label>
              </div>
            </div>

            <div className="flex gap-6 my-8">
              <div className="form-control md:w-full">
                <label className="label">
                  <span className="text-[20px] font-semibold text-[#1B1A1A]">
                    Coffee Photo
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Enter Coffee photo URL"
                    className="input input-bordered w-full"
                    name="photo"
                  />
                </label>
              </div>
            </div>
            <div className="flex gap-6 my-8">
              <div className="form-control md:w-full">
                <input
                  type="submit"
                  className="input input-bordered w-full text-[24px] font-rancho text-[#331A15] py-3 bg-[#D2B48C]"
                  value="Add Coffee"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;

// Images Link
// https://i.ibb.co/Y3PjYJm/1.png
// https://i.ibb.co/HYGnTcX/2.png
// https://i.ibb.co/xGDczcR/3.png
// https://i.ibb.co/jDfMzFZ/4.png
// https://i.ibb.co/2PbQD0d/5.png
// https://i.ibb.co/XCQcp2F/6.png
