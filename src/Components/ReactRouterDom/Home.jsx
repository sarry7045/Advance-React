import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Home</div>
      <div>
        <button onClick={() => navigate("./about")}> Order Place</button>
      </div>
    </>
  );
};

export default Home;
