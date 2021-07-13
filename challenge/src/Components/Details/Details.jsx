import React, { useContext } from "react";
import { DarkModeContext } from "./Services/Context.js";
import BackButton from "./Back/BackButton";

function Details() {
  const [darkMode, setdarkMode] = useContext(DarkModeContext);
  return (
    <div
      className={`h-screen w-screen ${
        darkMode ? "bg-veryDarkBlue" : "bg-light"
      } px-20 pb-10 pt-24 overflow-auto transition-colors`}
    >
      <div className="flex items-center justify-start">
        <BackButton />
      </div>
      <div className="flex items-center justify-center">
        <div
          className={`w-1/2 bg-center bg-cover h-96 border-8 mt-10 mr-10 mb-10 ${
            darkMode ? "border-darkBlue" : "border-light"
          }`}
          style={{
            backgroundImage: "url(https://restcountries.eu/data/bel.svg)",
          }}
        ></div>
        <div className={`w-1/2 ${darkMode ? "text-white" : "text-black"}`}>
          <p className="mb-5 font-bold text-3xl">Belgium</p>
          <div className="flex items-start justify-between mb-10">
            <div>
              <p className="capitalize mb-3">
                <span className="capitalize">native name: </span>Belgie
              </p>
              <p className="capitalize mb-3">
                <span className="capitalize">population: </span>11,319,511
              </p>
              <p className="capitalize mb-3">
                <span className="capitalize">region: </span>europe
              </p>
              <p className="capitalize mb-3">
                <span className="capitalize">sub region: </span>western europe
              </p>
              <p className="capitalize">
                <span className="capitalize">capital: </span>brussels
              </p>
            </div>
            <div>
              <p className="capitalize mb-3">
                <span className="capitalize">top level domain: </span>be
              </p>
              <p className="capitalize mb-3">
                <span className="capitalize">currencies: </span>euro
              </p>
              <p className="capitalize">
                <span className="capitalize">languages: </span>
                dutch,french,german
              </p>
            </div>
          </div>
          <div className="flex items-center justify-start">
            <span className="capitalize mr-3">border countries: </span>
            <div
              className={`px-8 py-2 capitalize ${
                darkMode ? "bg-darkBlue" : "bg-white"
              } shadow-lg mr-3`}
            >
              france
            </div>
            <div
              className={`px-8 py-2 capitalize ${
                darkMode ? "bg-darkBlue" : "bg-white"
              } shadow-lg mr-3`}
            >
              germany
            </div>
            <div
              className={`px-8 py-2 capitalize ${
                darkMode ? "bg-darkBlue" : "bg-white"
              } shadow-lg`}
            >
              netherlands
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
