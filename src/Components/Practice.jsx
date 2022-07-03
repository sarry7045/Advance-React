import React from "react";

const MyAaray = [
  {
    name: "Suraj",
    roll: 1,
    hobbies: ["Cricket", "Badmiton"],
  },
  {
    name: "Vinet ",
    roll: 2,
    hobbies: ["Chesss", "Badmiton"],
  },
  {
    name: "Neeraj",
    roll: 3,
    hobbies: ["Codeing", "Footabal"],
  },
  {
    name: "Aditya ",
    roll: 4,
    hobbies: ["PhotoGraphy", "Rummy"],
  },
];

const array = [
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
  "1000",
];

const Practice = () => {
  // Filter
  const ArrayFilter = array.filter((item) => {
    return item < 600;
  });
  console.log("ArrayFilter", ArrayFilter);

  // Map
  const ArrayMap = MyAaray.map((value) => {
    console.log(value.name);
    return (
      <>
        <h1>{value.name}</h1>
        <h1>{value.roll}</h1>
        <h1>{value.hobbies}</h1>
      </>
    );
    ArrayMap();
  });
  console.log("ArrayMap", ArrayMap);

  // Find
  const ArrayFind = MyAaray.find((value) => {
    return (value.name = "Suraj");
  });
  console.log("ArrayFind", ArrayFind);

  // ForEach
  const ArrayForEach = MyAaray.forEach((item) => {
    console.log("ArrayForEach", item.name);
  });

  // Reduce
  const ArrayReduce = MyAaray.reduce((current, item) => {
    return item.roll + current;
  }, 0);
  console.log("ArrayReduce", ArrayReduce);

  // Callback
  function show(x) {
    return x - 40;
  }
  function display(callback) {
    return callback(100);
  }
  console.log("callback", display(show));

  // Closure
  const closurefunc = () => {
    console.log("Function 1");
    const closure2 = () => {
      console.log("Function 2");
    };
    closure2();
  };
  closurefunc();

  // function Currying
  const sum = (a) => (b) => (c) => (d) => a + b + c + d;
  const add = sum(10)(20)(30)(40);
  console.log("add", add);

  const summ = (a) => (b) => (c) => (d) => a + b + c + d;
  const addd = summ(1)(2)(3)(4);
  console.log("addd", addd);

  // DeepCopy

  var student = {
    name: "Suraj",
    roll: 10,
    hobbies: ["Criket", "Chess"],
  };

  const student1 = JSON.parse(JSON.stringify(student));
  student1.name = "Neeraj";
  student1.roll = 15;
  student1.hobbies[1] = "Codeing";
  console.log("student,student1", student, student1);

  // Hoisting

  console.log(a);
  var a = 10;
  console.log(a);

  // Promises

  const PromiseFunc = () => {
    const data = new Promise(() => {
      setTimeout(() => {
        console.log("Done");
      }, 5000);
    });
    data
      .then((item) => {
        console.log("item", item);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  PromiseFunc();

  // 1 se 5 Tak Number Print karna hai harr 1second me 1 Num + Ho Like 1,2,3,4,5

  function x() {
    for (let i = 1; i <= 5; i++) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
  }
  x();
  function y() {
    for (var i = 1; i <= 5; i++) {}
  }

  // if hum var use karenge then wo print karega 6 harr ek second me but if
  // we use let then wo print karega 1 to 5 because let is the block

  // if hume wo var ka help leke he karna ho toh

  function y() {
    for (var i = 1; i <= 5; i++) {
      function close(x) {
        setTimeout(() => {
          console.log(x);
        }, x * 1000);
      }
      close(i);
    }
  }
  y();

  // Multiply the Array Number

  const arr = [1, 2, 3, 4, 5];

  function double(x) {
    return x * 2;
  }

  function binary(x) {
    return x.toString(2);
  }

  function isOdd(x) {
    return x % 2 === 0;
  }

  const reduceOutput = arr.reduce(function (acc, arr) {
    acc = acc + arr;
    return acc;
  });

  const doubleoutput = arr.map(double);
  const binaryoutputt = arr.map(binary);
  const idOddOutPut = arr.filter(isOdd);

  console.log("doubleoutput", doubleoutput);
  console.log("binaryoutputt", binaryoutputt);
  console.log("idOddOutPut", idOddOutPut);
  console.log("reduceOutput", reduceOutput);

  // NAN
  var a = 10;
  var b = "5";
  var c = "string";
  var d = b / c;
  console.log("d", d);

  // rest Opearator

  function rest(...inputs) {
    console.log(inputs);
  }

  rest("rest", 2, 4, 6, 7);

  // Find Even and Odd Number
  function evenodd() {
    for (var a = 0; a < 10; a++) {
      if (a % 2 == 0) {
        console.log("evvodd", a);
      }
    }
  }
  evenodd();

  // isArray
  var a = 10;
  // var a = ["1", "2", "4"]
  var b = Array.isArray(a);

  console.log("isArray", b);

  const nums = [1, 2, 3, 4, 5];
  const emptyArray = [];

  nums.forEach(function (value, index, array) {
    // console.log(value, index, array)
    emptyArray.push(value * 2);
  });
  console.log(emptyArray);

  const jadnfja = nums.map((value) => {
    return value * 2;
  });
  console.log(jadnfja);

  return <div>Practice</div>;
};

export default Practice;
