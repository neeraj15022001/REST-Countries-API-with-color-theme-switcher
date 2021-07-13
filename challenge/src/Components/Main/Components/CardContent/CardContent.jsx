import React, { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../../Context/DarkModeContext";
import Card from "./Local/Card/Card";
import { getCountries } from "./Local/Services/Countries.js";

function CardContent() {
  const [countries, setcountries] = useState({
    countryData: [],
    isLoading: true,
  });
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  useEffect(() => {
    let mounted = true;
    getCountries().then((countries) => {
      console.log(countries);
      if (mounted) {
        setcountries({ countryData: countries, isLoading: false });
      }
    });
    return () => {
      mounted = false;
    };
  }, []);
  const { countryData, isLoading } = countries;
  return (
    <div className="py-10 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-20 w-full h-full">
      <p
        className={`${darkMode ? "text-white" : "text-black"} ${
          isLoading ? "block" : "hidden"
        }`}
      >
        Loading....
      </p>
      {countryData.map((item) => (
        <Card
          key={item.name}
          countryName={item.name}
          population={item.population}
          region={item.region}
          capital={item.capital}
          image={item.flag}
        />
      ))}
    </div>
  );
}

export default CardContent;
