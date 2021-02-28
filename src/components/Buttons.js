import React from "react";

const Button = ({
  pushNumber,
  pushZero,
  pushDecimal,
  add,
  substract,
  multiply,
  divide,
  resetDisplay,
  formulaResult,
}) => {
  return (
    <>
      <button className="buttons operator" id="plus" onClick={() => add()}>
        +
      </button>
      <button
        className="buttons operator"
        id="minus"
        onClick={() => substract()}
      >
        &minus;
      </button>
      <button
        className="buttons operator"
        id="times"
        onClick={() => multiply()}
      >
        &times;
      </button>
      <button
        className="buttons operator"
        id="divided"
        onClick={() => divide()}
      >
        &divide;
      </button>
      <button
        className="buttons number"
        id="one"
        onClick={(e) => pushNumber(e)}
      >
        1
      </button>
      <button
        className="buttons number"
        id="two"
        onClick={(e) => pushNumber(e)}
      >
        2
      </button>
      <button
        className="buttons number"
        id="three"
        onClick={(e) => pushNumber(e)}
      >
        3
      </button>
      <button
        className="buttons number"
        id="four"
        onClick={(e) => pushNumber(e)}
      >
        4
      </button>
      <button
        className="buttons number"
        id="five"
        onClick={(e) => pushNumber(e)}
      >
        5
      </button>
      <button
        className="buttons number"
        id="six"
        onClick={(e) => pushNumber(e)}
      >
        6
      </button>
      <button
        className="buttons number"
        id="seven"
        onClick={(e) => pushNumber(e)}
      >
        7
      </button>
      <button
        className="buttons number"
        id="eight"
        onClick={(e) => pushNumber(e)}
      >
        8
      </button>
      <button
        className="buttons number"
        id="nine"
        onClick={(e) => pushNumber(e)}
      >
        9
      </button>
      <button className="buttons number" id="zero" onClick={(e) => pushZero(e)}>
        0
      </button>
      <button
        className="buttons action"
        id="equal"
        onClick={() => formulaResult()}
      >
        =
      </button>
      <button className="buttons action" id="ac" onClick={() => resetDisplay()}>
        AC
      </button>
      <button
        className="buttons number"
        id="period"
        onClick={(e) => pushDecimal(e)}
      >
        .
      </button>
    </>
  );
};

export default Button;
