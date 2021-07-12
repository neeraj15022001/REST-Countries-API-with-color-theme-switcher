import React, { useEffect, useState } from "react";
import Card from "./Local/Card/Card";
import { getCountries } from "./Local/Services/Countries.js";

function CardContent() {
  const [countries, setcountries] = useState([]);
  useEffect(() => {
    let mounted = true;
    getCountries().then((countries) => {
      console.log(countries);
      if (mounted) setcountries(countries);
    });
    return () => {
      mounted = false;
    };
  }, []);
  return (
    <div className="py-10 grid grid-cols-4 gap-20 w-full h-full">
      {countries.map((item) => (
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
