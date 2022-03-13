import React from "react";

const Practice = () => {
  const person = { name: "Suraj", age: 21, zip: 40058 };
  const persons = { ...person };
  console.log(persons);

  return <div>Practice</div>;
};

export default Practice;
