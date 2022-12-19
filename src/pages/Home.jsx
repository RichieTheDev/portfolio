import React from "react";
import { useNavigate } from "react-router-dom";
import Typed from "react-typed";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="sm:p-20 p-10 text-2xl space-y-6 mx-auto sm:text-5xl sm:space-y-4">
      <h2>
        Hi my name is{" "}
        <Typed strings={["Richie"]} typeSpeed={100} backSpeed={50} loop />
      </h2>

      <p>Turning Ideas into </p>
      <p>Real Life Products</p>
      <p className="mb-4">Is my Passion</p>
      <button onClick={() => navigate("/Contacts")} className="btn text-lg">
        Contact Me
      </button>
    </div>
  );
};

export default Home;
