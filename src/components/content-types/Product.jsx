import React from "react";
import Image from "next/image";
import Reviews from "../nestable/Reviews";

const Product = ({ blok }) => {

  return (
    <div>
      <div className="lg:mt-20 lg:flex-row lg:max-w-screen-lg flex flex-col justify-center mx-auto mb-20">
        <div className="w-full lg:w-[554px] lg:h-[554px] lg:pr-[32px] sm:m-4">
          <Image
            src={blok?.image?.filename || ""}
            alt={blok?.image?.alt || blok?.title || "Product image"}
            height={554}
            width={554}
            className="bg-[#f6f6f6] lg:bg-white lg:w-[554px] lg:h-[554px] object-cover lg:object-center"
          />
        </div>
        <div className="flex flex-col justify-around">
          <div className="lg:w-[554px] lg:gap-4 lg:pt-0 lg:pl-[32px] flex flex-col w-full gap-2 pl-8 pt-5 ">
            <h3 className="text-xl lg:text-2xl">
              {blok?.title || "Product Title"}
            </h3>
            <p className="text-p2 lg:-mt-3">${blok?.price || "0"}</p>
            <p className="text-p2 lg:w-[360px] lg:pt-0 pt-2">
              {blok?.description || "No description available."}
            </p>
            <div>
              <p className="text-p2 font-normal opacity-50 lg:pt-0 pt-5">
                Color
              </p>
              <div className="gap-2 flex pt-2">
                {blok?.colors?.map((color, index) => (
                  <button
                    key={index}
                    className="w-[50px] h-[50px] rounded-full border-[1px] border-black"
                    style={{ backgroundColor: color }}
                  ></button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-p2 font-normal opacity-50">Size</p>
              <div className="flex gap-2 pt-2">
                {blok?.sizes?.map((size, index) => (
                  <button
                    key={index}
                    className="w-[50px] h-[50px] border-[1px] border-black font-semibold"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-p4 font-normal underline lg:pt-0 pt-10">
              Size & Fit Guide
            </p>
            <p className="text-p4 font-normal opacity-50">
              {blok?.model_info || "Model information not available."}
            </p>
          </div>
          <div className="ml-8">
            <button className="w-[160px] h-[50px] bg-white text-black hover:bg-black hover:text-white border-2 border-black font-semibold">Add to cart</button>
          </div>
        </div>
      </div>
      {blok?.reviews && <Reviews></Reviews>}
    </div>
  );
};

export default Product;
