import React, { useState } from "react";

function HigherOrderComponent() {
  return (
    <div>
      <Counter />
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  return;
  <div>
    <h3> {count} </h3>
    <button>Update</button>
  </div>;
}

export default HigherOrderComponent;
