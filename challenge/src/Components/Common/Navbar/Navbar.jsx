import React from "react";
import { MoonOutline } from "react-ionicons";

function Navbar() {
  return (
    <div className="flex items-center justify-between px-20 py-4 theme-dark shadow-2xl fixed top-0 left-0 right-0">
      <p className="text-xl font-extrabold">Where in the world?</p>
      <div className="flex items-center justify-center">
        <MoonOutline
          color={"#00000"}
          title={"Moon"}
          height="25px"
          width="25px"
          className="mr-2"
        />
        <p className="capitalize text-sm">dark mode</p>
      </div>
    </div>
  );
}

export default Navbar;
