import React, { useState, useEffect } from "react";

const Button = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    // effect
    // return () => {
    //     cleanup
    // }
    console.log(number);
  }, [number]);

  const pushNumber = (e) => {
    setNumber(number + e);
  };
  const resetDisplay = () => {
    setNumber(0);
  };

  return (
    <>
      <button className="buttons operator" id="plus">
        +
      </button>
      <button className="buttons operator" id="minus">
        &minus;
      </button>
      <button className="buttons operator" id="times">
        &times;
      </button>
      <button className="buttons operator" id="divided">
        &divide;
      </button>
      <button className="buttons number" id="one" onClick={() => pushNumber(1)}>
        1
      </button>
      <button className="buttons number" id="two" onClick={() => pushNumber(2)}>
        2
      </button>
      <button
        className="buttons number"
        id="three"
        onClick={() => pushNumber(3)}
      >
        3
      </button>
      <button
        className="buttons number"
        id="four"
        onClick={() => pushNumber(4)}
      >
        4
      </button>
      <button
        className="buttons number"
        id="five"
        onClick={() => pushNumber(5)}
      >
        5
      </button>
      <button className="buttons number" id="six" onClick={() => pushNumber(6)}>
        6
      </button>
      <button
        className="buttons number"
        id="seven"
        onClick={() => pushNumber(7)}
      >
        7
      </button>
      <button
        className="buttons number"
        id="eight"
        onClick={() => pushNumber(8)}
      >
        8
      </button>
      <button
        className="buttons number"
        id="nine"
        onClick={() => pushNumber(9)}
      >
        9
      </button>
      <button
        className="buttons number"
        id="zero"
        onClick={() => pushNumber(0)}
      >
        0
      </button>
      <button className="buttons action" id="equal">
        =
      </button>
      <button className="buttons action" id="ac" onClick={() => resetDisplay()}>
        AC
      </button>
      <button className="buttons number" id="period">
        .
      </button>
    </>
  );
};

export default Button;
