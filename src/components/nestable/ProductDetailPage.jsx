import React from "react";
import Image from "next/image";

const ProductDetailPage = () => {
  return (
    <div className="mt-20 flex gap-16 contain">
      <div className="w-[554px] h-[554px] border">
        <Image
          src=""
          alt=""
          height={554}
          width={554}
          layout="fixed"
          className="bg-[#C4C4C4] w-[554px] h-[554px]"
        ></Image>
      </div>
      <div className="flex flex-col w-[554px] gap-4">
        <h3>Men’s winter jacket</h3>
        <p className="text-p2 -mt-3">$99</p>
        <p className="text-p2 w-[360px]">
          Revamp your style with the latest designer trends in men’s clothing or
          achieve a perfectly curated wardrobe thanks to our line-up of timeless
          pieces.
        </p>
        <div>
          <p className="text-p2 font-normal opacity-50">Color</p>
          <div className="gap-2 flex pt-2">
            <button className="w-[50px] h-[50px] bg-[#DF9167] rounded-full border-[1px] border-black"></button>
            <button className="w-[50px] h-[50px] bg-black rounded-full border-[1px] border-black"></button>
          </div>
        </div>
        <div>
          <p className="text-p2 font-normal opacity-50">Size</p>
          <div className="flex gap-2 pt-2">
            <button className="w-[50px] h-[50px] border-[1px] border-black font-semibold">
              XS
            </button>
            <button className="w-[50px] h-[50px] border-[1px] border-black font-semibold">
              S
            </button>
            <button className="w-[50px] h-[50px] border-[1px] border-black font-semibold">
              M
            </button>
            <button className="w-[50px] h-[50px] border-[1px] border-black font-semibold">
              L
            </button>
            <button className="w-[50px] h-[50px] border-[1px] border-black font-semibold">
              XL
            </button>
            <button className="w-[50px] h-[50px] border-[1px] border-black font-semibold">
              XXL
            </button>
            <button className="w-[50px] h-[50px] border-[1px] border-black font-semibold">
              3XL
            </button>
          </div>
        </div>
        <p className="text-p4 font-normal underline">Size & Fit Guide</p>
        <p className="text-p4 font-normal opacity-50">
          Height of model: 189 cm. / 6′ 2″ Size 41
        </p>
      </div>
    </div>
  );
};

export default ProductDetailPage;
