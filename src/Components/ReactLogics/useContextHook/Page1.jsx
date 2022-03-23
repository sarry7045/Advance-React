import React, { createContext } from "react";

const FirstName = createContext();
const LastName = createContext();

const Page1 = () => {
  return (
    <>
      <FirstName.Provider value={"Suraj"}></FirstName.Provider>
      <LastName.Provider value={"Yadav"}></LastName.Provider>
    </>
  );
};

export default Page1;
export { FirstName, LastName };
