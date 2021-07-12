import React from "react";

function Card({ countryName, population, region, capital, image }) {
  return (
    <div className="bg-darkBlue text-white w-60">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bg-contain h-32 w-60 bg-center"
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
