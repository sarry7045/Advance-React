import React from "react";

const Interview = () => {
  const myArray = [];

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  function percentage(numA, numB) {
    return (numA / numB) * 100;
  }

  for (var num = 0; num < 5000; num++) {
    myArray.push(getRandomArbitrary(798, 906));
    myArray.push(percentage(799, 852));

    if (num % 2 == 0) {
      // % of Even Number
      console.log("Even Numbers", num);
      return (100 * num) / 5000;
    } else {
      // % of Odd Number
      console.log("Odd Number", num);
      return (100 * num) / 5000;
    }
    function Percentageof798() {
      // % of 798
      return (100 * 798) / 5000;
    }
  }

  console.log("myArray", myArray);

  return <div>Interview</div>;
};

export default Interview;
