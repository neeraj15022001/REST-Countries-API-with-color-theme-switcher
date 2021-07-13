import React, { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "./Services/Context.js";
import BackButton from "./Back/BackButton";

function Details({ countryName }) {
  const [darkMode, setdarkMode] = useContext(DarkModeContext);
  const [countryData, setcountryData] = useState({});
  // const arrayToString = (array) => {
  //   console.log(array)
  //   let stringToBeReturned = ""
  //   array.map(item => {
  //     stringToBeReturned += item
  //   })
  //   return stringToBeReturned
  // }
  const getData = () => {
    return fetch(
      `https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`,
      { method: "GET", redirect: "follow" }
    )
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    let mounted = true;
    getData().then((data) => {
      if (mounted) {
        setcountryData(data[0]);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);
  return (
    <div
      className={`h-screen w-screen ${
        darkMode ? "bg-veryDarkBlue" : "bg-light"
      } px-20 pb-10 pt-24 overflow-auto transition-colors`}
    >
      <div className="flex items-center justify-start">
        <BackButton />
      </div>
      <div className="sm:flex sm:items-center sm:justify-center">
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
                <span className="capitalize">native name: </span>
                {countryData && countryData.nativeName}
              </p>
              <p className="capitalize mb-3">
                <span className="capitalize">population: </span>
                {countryData && countryData.population}
              </p>
              <p className="capitalize mb-3">
                <span className="capitalize">region: </span>
                {countryData && countryData.region}
              </p>
              <p className="capitalize mb-3">
                <span className="capitalize">sub region: </span>
                {countryData && countryData.subregion}
              </p>
              <p className="capitalize">
                <span className="capitalize">capital: </span>
                {countryData && countryData.capital}
              </p>
            </div>
            <div>
              <p className="capitalize mb-3">
                <span className="capitalize">top level domain: </span>
                {countryData && countryData.topLevelDomain[0]}
              </p>
              <p className="capitalize mb-3">
                <span className="capitalize">currencies: </span>
                {countryData && countryData.currencies[0].code}
              </p>
              <p className="capitalize">
                <span className="capitalize">languages: </span>
                {countryData &&
                  countryData.languages.map((item) => item.name[0])}
              </p>
            </div>
          </div>
          <div className="sm:flex sm:items-center sm:justify-start">
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
