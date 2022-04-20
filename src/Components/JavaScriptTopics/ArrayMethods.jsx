import React from "react";

const ArrayMethods = () => {
  const items = [
    {
      name: "Bike",
      price: 100,
    },

    {
      name: "TV",
      price: 80,
    },
    {
      name: "Phone",
      price: 50,
    },
    {
      name: "Computer",
      price: 20,
    },
    {
      name: "Keyboard",
      price: 70,
    },
  ];

  // filter

  const filterItem = items.filter((item) => {
    return item.price <= 100;
  });
  console.log(filterItem);

  // map

  const mapItem = items.map((item) => {
    return (
      <>
        <h1>{item.name}</h1>
        <h1>{item.price}</h1>
      </>
    );
  });
  console.log(mapItem);

  // find

  const findItem = items.find((item) => {
    return item.name === "Phone";
  });
  console.log(findItem);

  //   every

  const everyItem = items.every((item) => {
    return item.price <= 100;
  });
  console.log(everyItem);
  return <div>ArrayMethods</div>;
};

export default ArrayMethods;
