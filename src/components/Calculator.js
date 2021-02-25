import React from "react";
import Buttons from "./Buttons";
import DisplayActual from "./DisplayActual";
import DisplayFormula from "./DisplayFormula";

const Calculator = () => {
  return (
    <div className="calculator">
      <DisplayFormula />
      <DisplayActual />
      <Buttons />
    </div>
  );
};

export default Calculator;
