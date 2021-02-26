/* eslint-disable default-case */
import React, { useState, useEffect } from "react";
import Buttons from "./Buttons";
import DisplayActual from "./DisplayActual";
import DisplayFormula from "./DisplayFormula";

const Calculator = () => {
  const [memoryNumber, setMemoryNumber] = useState("");
  const [actualNumber, setActualNumber] = useState("");
  //   useEffect(() => {}, [actualNumber, memoryNumber]);

  const addToFormula = (e) => {
    setMemoryNumber(memoryNumber + actualNumber + e.target.innerText);
    setActualNumber("");
  };

  const pushNumber = (e) => {
    setActualNumber(actualNumber + e.target.innerText);
  };

  const formulaResult = () => {
    let n = memoryNumber.concat(actualNumber);
    setMemoryNumber(n);
    setActualNumber("");
    let stringFormula = n;
    let arrayFormula = [];
    let resultado = 0;
    let operator = "";
    if (n.length > 0) {
      //check if last char is number or operator
      if (isNaN(n.charAt(n.length - 1))) {
        stringFormula = n.slice(0, -1);
      }
      [...stringFormula].map((number) => {
        if (!isNaN(number)) {
          arrayFormula.push(Number(number));
        } else {
          operator = number;
        }
        switch (operator) {
          case "×":
            resultado = arrayFormula[0] * arrayFormula[1];
            break;
          case "+":
            resultado = arrayFormula[0] + arrayFormula[1];
            break;
          case "−":
            resultado = arrayFormula[0] - arrayFormula[1];
            break;
          case "÷":
            resultado = arrayFormula[0] / arrayFormula[1];
            break;
        }
        return 0;
      });
      setMemoryNumber(resultado);
      setActualNumber("");
    }
  };

  const resetDisplay = () => {
    setActualNumber("");
    setMemoryNumber("");
  };

  return (
    <div className="calculator">
      <DisplayFormula memoryNumber={memoryNumber} />
      <DisplayActual actualNumber={actualNumber} />
      <Buttons
        pushNumber={pushNumber}
        addToFormula={addToFormula}
        resetDisplay={resetDisplay}
        formulaResult={formulaResult}
      />
    </div>
  );
};

export default Calculator;
