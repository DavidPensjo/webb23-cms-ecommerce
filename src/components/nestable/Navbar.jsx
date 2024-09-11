"use client";

import { useState } from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";

const Navbar = ({ config }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-fill_primary h-2/6 px-4">
      <div className="container mx-auto flex h-11 items-center justify-between max-w-default">
        <div className="flex items-center space-x-9">
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <img
                src={config.content.mobile_icon}
                className="w-8 h-8"
                alt="Menu"
              />
            </button>
          </div>
          <Link href="/">
            <img src={config.content.logo} className="cursor-pointer"></img>
          </Link>

          <div className="hidden md:flex items-center space-x-9">
            <div className="relative group">
              <Link href="/shop-list-page">
                <p className="cursor-pointer">Products</p>
              </Link>
              <div className="bg-white border border-fill_primary absolute left-0 mt-4 p-4 rounded shadow-lg z-10 transition-all ease-in-out duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                <div>
                  <p className="p-2 font-semibold">Trending Products</p>
                </div>
                {config.content.products.map((item, index) => (
                  <div className="flex w-44" key={index}>
                    <Link href={item.link.url}>
                      <p className="p-2 hover:bg-slate-100 cursor-pointer rounded">
                        {item.name}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <Link href="/about">
              <p className=" cursor-pointer">About</p>
            </Link>
            <SearchBar />
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <img
            src={config.content.cart_icon}
            className="w-9 h-5"
            alt="Cart Icon"
          />
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white p-4 shadow-lg space-y-4">
          <Link href="/shop-list-page">
            <p className="cursor-pointer">Products</p>
          </Link>
          <Link href="/about">
            <p className="cursor-pointer">About</p>
          </Link>
          <SearchBar />
        </div>
      )}
    </div>
  );
};

export default Navbar;
