import React from "react";

const Promises = () => {
  const data = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Data Succes Done");
    });
  });

  data
    .then((item) => {
      console.warn(item);
    })
    .catch((err) => {
      console.warn("Err", err);
    });
  
  return <div>Promises</div>;
};




export default Promises;
