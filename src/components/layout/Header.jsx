import React from "react";
import Navbar from "../nestable/Navbar";

const Header = ({ config }) => {
  return (
    <div>
      <div className="bg-fill_primary px-4">
        <div className="container mx-auto flex md:flex-row justify-between h-11 items-center max-w-default">
          <p className="text-white text-sm sm:text-base hidden md:block">USD</p>
          <p className="text-white text-sm sm:text-base mt-2 hidden smh:block sm:mt-0">
            {config.content.message}
          </p>
          <p className="text-white text-sm sm:text-base mt-2 hidden md:block sm:mt-0">
            SUPPORT
          </p>
        </div>
      </div>
      <div>
        <Navbar config={config}></Navbar>
      </div>
    </div>
  );
};

export default Header;
