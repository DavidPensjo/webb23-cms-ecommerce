import React from "react";
import Image from "next/image";

const ProductDetail = ({ blok }) => {
  console.log(blok);

  return (
    <div className="mt-20 flex gap-16 contain">
      <div className="w-[554px] h-[554px] border">
        <Image
          src={blok?.image?.filename || ""}
          alt={blok?.image?.alt || blok?.title || "Product image"}
          height={554}
          width={554}
          className="bg-[#C4C4C4] w-[554px] h-[554px]"
        />
      </div>

      <div className="flex flex-col w-[554px] gap-4">
        <h3>{blok?.title || "Product Title"}</h3>
        <p className="text-p2 -mt-3">${blok?.price || "0"}</p>
        <p className="text-p2 w-[360px]">
          {blok?.description || "No description available."}
        </p>

        <div>
          <p className="text-p2 font-normal opacity-50">Color</p>
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

        <p className="text-p4 font-normal underline">Size & Fit Guide</p>
        <p className="text-p4 font-normal opacity-50">
          {blok?.model_info || "Model information not available."}
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
