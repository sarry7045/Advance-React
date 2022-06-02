import React from "react";

const ArgumentObject = () => {
  // Suppose hume kisi 2 number ko add krna hai then hum usme 2 parameter ko pass krna padta hai,
  //  soo uske solution k liye hum ArgumentObject use karte hai taki hum kitna bhi number ka argument pass kare toh
  // woh add  krke dede

  // we can store a function in a variable

  function add(num1, num2) {
    return num1 + num2;
  }

  console.log(add(2, 6));

  function addition() {
    if (arguments.length == 0) {
      console.log("No argument Passes");
    } else {
      let sum = 0;
      for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
      }
      console.log(sum);
    }
  }

  addition();

  function addMultiple() {
    if (arguments.length == 0) {
      console.log(" No Arguments");
    } else {
      let sum = 0;
      for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
      }
      console.log(sum);
    }
  }

  addMultiple(10, 19);

  return <div>ArgumentObject</div>;
};

export default ArgumentObject;
