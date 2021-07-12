import React from "react";
import Inputs from "./Components/Inputs/Inputs";
import CardContent from "./Components/CardContent/CardContent";

function Main() {
  return (
    <div className="h-screen w-screen bg-veryDarkBlue px-20 pb-10 pt-24 overflow-auto">
      <Inputs />
      <CardContent />
    </div>
  );
}

export default Main;
