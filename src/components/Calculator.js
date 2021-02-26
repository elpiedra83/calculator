/* eslint-disable default-case */
import React, { useState } from "react";
import Buttons from "./Buttons";
import DisplayActual from "./DisplayActual";
import DisplayFormula from "./DisplayFormula";

const Calculator = () => {
  const [memoryNumber, setMemoryNumber] = useState("");
  const [actualNumber, setActualNumber] = useState("");

  const addToFormula = (e) => {
    setMemoryNumber(memoryNumber + actualNumber + e.target.innerText);
    setActualNumber("");
  };

  const pushNumber = (e) => {
    setActualNumber(actualNumber + e.target.innerText);
  };

  const formulaResult = () => {
    console.log(`memoryNumber:${memoryNumber} actualNumber:${actualNumber}`);
    let n = memoryNumber.concat(actualNumber);
    console.log("n:" + n);
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
        console.log("number:" + number);
        if (!isNaN(number)) {
          arrayFormula.push(Number(number));
        } else {
          operator = number;
        }
        console.log("arrayFormula: " + arrayFormula);
        console.log("operator: " + operator);
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
        console.log("resultado: " + resultado);
        return resultado;
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
