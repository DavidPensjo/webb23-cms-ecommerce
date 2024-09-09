import React from "react";
import Navbar from "../nestable/Navbar";

const Header = ({ config }) => {
  return (
    <div>
      <div className="bg-fill_primary">
        <div className="container mx-auto flex justify-between h-11 items-center">
          <p className="text-white">USD</p>
          <p className="text-white">{config.content.message}</p>
          <p className="text-white">SUPPORT</p>
        </div>
      </div>
      <div>
        <Navbar config={config}></Navbar>
      </div>
    </div>
  );
};

export default Header;
