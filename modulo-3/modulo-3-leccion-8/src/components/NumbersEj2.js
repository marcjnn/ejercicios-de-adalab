import FormEj2 from "./FormEj2";
import React, { useState } from "react";

const NumbersEj2 = () => {
  const numbers = [1, 4, 6, 8, 45, 89];
  const [result, setResult] = useState(null);
  // null ???
  // const [isEven, setEven] = useState(null);
  // const [isOdd, setOdd] = useState(null);

  // HANDLE change

  let isChecked;
  let isEven;
  let isOdd;
  const handleEvenOddChange = (ev) => {
    if (ev.target.value === "even") {
      isEven = !isEven;
      console.log(isEven);
    } else if (ev.target.value === "odd") {
      isOdd = !isOdd;
      console.log(isOdd);
    }
    isChecked = ev.target.value;
    console.log(isChecked);
    console.log(`even: ${isEven}, odd: ${isOdd}`);
  };

  const filterEvenOdd = (number) => {
    if (isEven && number % 2 === 0) {
      console.log("even and number");
      return number;
    }
    if (isOdd && number % 2 !== 0) {
      console.log("odd and number");
      return number;
    }
    if (!isEven && !isOdd) {
      return number;
    }
  };

  const handleNumberChange = (ev) => {
    setResult(ev.target.value);
  };

  // const filteredNumbers = numbers.filter((number) => number > result);

  const renderedNumbers = numbers
    .filter((number) => number > result)
    .filter(filterEvenOdd)
    .map((n, i) => {
      return <li key={i}>{n}</li>;
    });

  const justNumbers = numbers.map((n, i) => {
    return <li key={i}>{n}</li>;
  });
  return (
    <>
      <ul>{renderedNumbers}</ul>
      <FormEj2
        handleNumber={handleNumberChange}
        handleEvenOdd={handleEvenOddChange}
        result={result}
        evenodd={isChecked}
      />
      <ul>{justNumbers}</ul>
    </>
  );
};

export default NumbersEj2;
