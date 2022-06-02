import React from "react";

const FunctionCurrying = () => {
  const sum = (a) => (b) => (c) => a + b + c;
  const add = sum(5)(10)(20);
  console.log(add);

  const summ = (aa) => (bb) => (cc) => aa + bb + cc;
  const addd = summ(5)(5)(5);
  console.log(addd);


  const summm = (aaa) => (bbb) => (ccc) => aaa + bbb + ccc;
  const adddd = summm(2)(2)(4)
  console.log(adddd);
  
  return <div>FunctionCurrying</div>;
};

export default FunctionCurrying;
