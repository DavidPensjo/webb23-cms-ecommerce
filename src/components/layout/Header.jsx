import React from "react";
import Navbar from "../nestable/Navbar";

const Header = ({ config }) => {
  return (
    <div>
      <div className="bg-fill_primary px-4">
<<<<<<< HEAD
        <div className="container mx-auto flex justify-between h-11 items-center w-default">
=======
        <div className="container mx-auto flex justify-between h-11 items-center max-w-default">
>>>>>>> 235c5f451db9b0db36ec6ec3287bbffa4839ce29
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
