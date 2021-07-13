import React, { useContext } from "react";
import SearchBar from "./Local/SearchBar/SearchBar";
import Filter from "./Local/Filter/Filter";

function Inputs() {
  return (
    <div className=" flex flex-col sm:flex-row md:flex-row lg:flex-row items-center justify-between">
      <SearchBar />
      <Filter />
    </div>
  );
}

export default Inputs;
