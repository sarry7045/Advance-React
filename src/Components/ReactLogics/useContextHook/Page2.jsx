import React, { useContext } from "react";
import { FirstName, LastName } from "./Page1";

const Page2 = () => {
  const context = useContext(FirstName);
  const context1 = useContext(LastName);
  return (
    <>
      <h1>
        {context} {context1}
      </h1>
    </>
  );
};

export default Page2;
