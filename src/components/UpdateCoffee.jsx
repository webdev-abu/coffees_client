import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";
import Heading from "./Heading";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
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

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const price = form.price.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
      price,
    };
    console.log(newCoffee);
    fetch(`https://coffee-server-gghx.onrender.com/updateCoffee/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Coffee Updated Success !",
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
          title="Update Coffee"
          description="It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here."
        />
        <div className="w-11/12 mx-auto my-8 font-raleway">
          <form onSubmit={handleUpdateCoffee} className="">
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
                    defaultValue={name}
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
                    defaultValue={quantity}
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
                    defaultValue={supplier}
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
                    defaultValue={taste}
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
                    defaultValue={category}
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
                    defaultValue={details}
                  />
                </label>
              </div>
            </div>

            <div className="flex gap-6 my-8">
              <div className="form-control md:w-full">
                <label className="label">
                  <span className="text-[20px] font-semibold text-[#1B1A1A]">
                    Coffee Price
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Enter Coffee photo URL"
                    className="input input-bordered w-full"
                    name="price"
                    defaultValue={price}
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
                    defaultValue={photo}
                  />
                </label>
              </div>
            </div>
            <div className="flex gap-6 my-8">
              <div className="form-control md:w-full">
                <input
                  type="submit"
                  className="input input-bordered w-full text-[24px] font-rancho text-[#331A15] py-3 bg-[#D2B48C]"
                  value="Update Coffee"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
