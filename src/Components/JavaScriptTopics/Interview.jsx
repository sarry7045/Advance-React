import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Interview = () => {
  const [store, Setstore] = useState([]);

  const GrayQuest = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log("data", data);
    Setstore(data);
  };

  useEffect(() => {
    GrayQuest();
  }, []);
  console.log("store", store);

  const handleClick = () => {
    return ""
  };

  return (
    <>
      <div>
        {store.map((value) => (
          <>
            <div key={value.id}>
              <h6>{value.id}</h6>
              <h6>{value.username}</h6>
              <h5>{value.email}</h5>
              <h4>{value.name}</h4>
              <h3>{value.address.city}</h3>
              <button onClick={handleClick}>Submit</button>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Interview;
