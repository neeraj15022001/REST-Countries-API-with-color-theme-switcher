import React, { useContext } from "react";
import { DarkModeContext } from "./Services/Context.js";

function Card({ countryName, population, region, capital, image }) {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <div
      className={`${
        darkMode ? "bg-darkBlue text-white" : "bg-white text-black"
      } w-60 m-auto rounded-md cursor-pointer transition-transform transform hover:scale-110`}
      onClick={() => window.location.assign(`/details/${countryName}`)}
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bg-cover h-32 w-60 bg-center bg-no-repeat rounded-t-md"
      ></div>
      <div className="p-5">
        <p className="font-bold text-lg mb-4">{countryName}</p>
        <p className="text-sm">{`Population : ${population}`}</p>
        <p className="text-sm">{`Region : ${region}`}</p>
        <p className="text-sm">{`Capital : ${capital}`}</p>
      </div>
    </div>
  );
}

export default Card;
