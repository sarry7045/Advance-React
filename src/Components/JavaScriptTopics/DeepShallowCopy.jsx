import React from "react";

const DeepShallowCopy = () => {
  // Shalllow Copy = Copying one top level Elements
  // Deep Copy = Copying nested elemment

  // top level Elements

  var array = ["Suraj", "Neeraj", "Aditya"];
  console.log("array", array);
  var object = { size: "100%", owner: "Sid" };
  console.log("object", object);

  // nested elemment

  var array1 = ["Suraj", "Neeraj", ["100", 200], { x: 100 }];
  console.log("array1", array1);
  var object1 = { size: "100%", owner: "Sid", ages: [22, 45, 56] };
  console.log("object1", object1);

  //

  var array2 = ["Suraj", "Neeraj", "Aditya"];
  var array3 = array2;
  array3[0] = "Sarry";
  console.log("array3, array2", array3, array2);

  var car = { size: "100%", owner: "Sid", isAcorNonAc: true };
  var car1 = car;
  car1.isAcorNonAc = false;
  console.log(car, car1);

  var originalArray = ["100", "200", "300", { a: "NotChanged" }];
  var anotherArray = ["Suraj"];
  // concat add the multiple array in one aaray
  var conArray = anotherArray.concat(originalArray);
  var fromArray = Array.from(originalArray);
  console.log("fromArray", fromArray);
  // console.log("conArray", conArray)
  conArray[0] = "concat";
  conArray[4]["a"] = "Change";
  console.log("conArray,originalArray", conArray, originalArray);

  // ShallowCopy

  var ShallObj = {
    age: 1,
    gender: "Male",
    hobbies: ["Cricket, Football, Chess"],
  };

  var spreadShallObj = { ...ShallObj };
  spreadShallObj.age = "22";
  spreadShallObj.hobbies[0] = "Dancing";
  console.log("ShallObj,spreadShallObj", ShallObj, spreadShallObj);

  // Deep Copy

  var DeepObj = {
    age: 1,
    gender: "Male",
    hobbies: ["Cricket", "Footbal", "Chess"],
  };
  var DeepObj1 = JSON.parse(JSON.stringify(DeepObj));
  DeepObj1.age = "20";
  DeepObj1.hobbies[0] = "Codeing";
    console.log("DeepObj,DeepObj1", DeepObj, DeepObj1);
    
    // Example 1

  const person = {
    name: "Suraj",
    age: 22,
    Male: true,
    city: ["Mumbai", "UttarPradesh"],
    };
    

  //   const p1 = person;
  //   p1.name = "Surjiya";
  //   p1.age = "21";
  //   p1.Male = false;
  //     console.log("p1,person",p1,person);

  var p2 = JSON.parse(JSON.stringify(person));
  p2.Male = false;
  p2.name = "Suriya";
  p2.age = 20;
  p2[0] = "Andheri";
    console.log("p2,person", p2, person);
    
    // Example 2

    const student = { name: "Suraj", roll: 10, result: true, hobbies: ["Cricket, Chesss"] }

    // const std1 = student;
    // std1.name = "Neeraj"
    // std1.roll = 20
    // std1.result = false
    //     std1[1] = " Football"
    // console.log("student, std1", student, std1);
    
    const std2 = JSON.parse(JSON.stringify(student))
    std2.name = "Neeraj"
    std2.roll = 20
    std2.result = false
    std2[1] = " Football"
  console.log("student, std2", student, std2);
  
  return <div>DeepShallowCopy</div>;
};

export default DeepShallowCopy;
