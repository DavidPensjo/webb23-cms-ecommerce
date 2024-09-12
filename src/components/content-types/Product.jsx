import React from "react";
import Image from "next/image";
import { storyblokEditable } from "@storyblok/react";

const Product = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className="lg:mt-20 lg:flex-row lg:max-w-screen-lg flex flex-col justify-center mx-auto"
    >
      <div className="w-full lg:w-[554px] lg:h-[554px] lg:pr-[32px]">
        <Image
          src={blok?.image?.filename || ""}
          alt={blok?.image?.alt || blok?.title || "Product image"}
          height={554}
          width={554}
          className="bg-[#C4C4C4] lg:w-[554px] lg:h-[554px] object-cover lg:object-center"
          {...storyblokEditable(blok.image)}
        />
      </div>
      <div className="lg:w-[554px] lg:gap-4 lg:pt-0 lg:pl-[32px] flex flex-col w-full gap-2 pl-8 pt-5">
        <h3 className="text-xl lg:text-2xl" {...storyblokEditable(blok.title)}>
          {blok?.title || "Product Title"}
        </h3>
        <p className="text-p2 lg:-mt-3" {...storyblokEditable(blok.price)}>
          ${blok?.price || "0"}
        </p>
        <p
          className="text-p2 lg:w-[360px] lg:pt-0 pt-2"
          {...storyblokEditable(blok.description)}
        >
          {blok?.description || "No description available."}
        </p>
        <div>
          <p className="text-p2 font-normal opacity-50 lg:pt-0 pt-5">Color</p>
          <div className="gap-2 flex pt-2">
            {blok?.colors?.map((color, index) => (
              <button
                key={index}
                className="w-[50px] h-[50px] rounded-full border-[1px] border-black"
                style={{ backgroundColor: color }}
                {...storyblokEditable(blok.colors)}
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
                {...storyblokEditable(blok.sizes)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <p
          className="text-p4 font-normal underline lg:pt-0 pt-10"
          {...storyblokEditable(blok.size_fit_guide)}
        >
          Size & Fit Guide
        </p>
        <p
          className="text-p4 font-normal opacity-50"
          {...storyblokEditable(blok.model_info)}
        >
          {blok?.model_info || "Model information not available."}
        </p>
      </div>
    </div>
  );
};

export default Product;
