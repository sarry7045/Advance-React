import React, { useState } from "react";

const OtherThings = () => {
  const [first, setfirst] = useState(false);

  const handleClick = () => {
    setfirst(true);
  };

  return (
    <>
      <div>
        {first ? <h6> Components </h6> : <h6> No Component</h6>}
        <button onClick={handleClick}>Button</button>
      </div>
    </>
  );
};

export default OtherThings;
