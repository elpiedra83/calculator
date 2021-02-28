/* eslint-disable default-case */
import React, { useState } from "react";
import Buttons from "./Buttons";
import DisplayActual from "./DisplayActual";
import DisplayFormula from "./DisplayFormula";

const Calculator = () => {
  const [memoryNumber, setMemoryNumber] = useState("");
  const [actualNumber, setActualNumber] = useState("");
  const [previousNumber, setPreviousNumber] = useState("");
  const [operator, setOperator] = useState("");

  const addToMemory = (actualOperator) => {
    if (memoryNumber.indexOf("=") === -1) {
      setPreviousNumber(actualNumber);
      setMemoryNumber(memoryNumber + actualNumber + actualOperator);
      setActualNumber("");
    } else {
      setPreviousNumber(actualNumber);
      setMemoryNumber(actualNumber + actualOperator);
      setActualNumber("");
    }
  };

  const pushZero = (e) => {
    //only allows to put a zero in every position nor the start one
    if (actualNumber !== "") {
      setActualNumber(actualNumber + e.target.innerText);
    }
  };
  const pushDecimal = (e) => {
    //check if there is only one decimal point en the actual display
    if (actualNumber.indexOf(".") === -1) {
      setActualNumber(actualNumber + e.target.innerText);
    }
  };
  const pushNumber = (e) => {
    setActualNumber(actualNumber + e.target.innerText);
  };

  const add = () => {
    if (memoryNumber.indexOf("+") === -1) {
      addToMemory("+");
      setOperator("plus");
    }
  };
  const substract = () => {
    if (memoryNumber.indexOf("-") === -1) {
      addToMemory("-");
      setOperator("substract");
    }
  };
  const multiply = () => {
    if (memoryNumber.indexOf("×") === -1) {
      addToMemory("×");
      setActualNumber("");
      setOperator("multiply");
    }
  };
  const divide = () => {
    if (memoryNumber.indexOf("÷") === -1) {
      addToMemory("÷");
      setActualNumber("");
      setOperator("divide");
    }
  };

  const formulaResult = () => {
    let result = 0;
    switch (operator) {
      case "plus":
        result = Number(actualNumber) + Number(previousNumber);
        break;
      case "substract":
        result = Number(previousNumber) - Number(actualNumber);
        break;
      case "multiply":
        result = Number.parseFloat(
          Number(previousNumber) * Number(actualNumber)
        ).toFixed(2);
        break;
      case "divide":
        result = Number.parseFloat(
          Number(previousNumber) / Number(actualNumber)
        ).toFixed(2);
        break;
    }
    setMemoryNumber(memoryNumber + actualNumber + "=" + result);
    setActualNumber(result);
  };

  const resetDisplay = () => {
    setActualNumber("");
    setMemoryNumber("");
    setOperator("");
    setPreviousNumber("");
  };

  return (
    <div className="calculator">
      <DisplayFormula memoryNumber={memoryNumber} />
      <DisplayActual actualNumber={actualNumber} />
      <Buttons
        pushNumber={pushNumber}
        pushZero={pushZero}
        add={add}
        substract={substract}
        multiply={multiply}
        divide={divide}
        pushDecimal={pushDecimal}
        resetDisplay={resetDisplay}
        formulaResult={formulaResult}
      />
    </div>
  );
};

export default Calculator;
