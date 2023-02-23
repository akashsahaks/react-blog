import React from "react";

const Home = () => {
  const handleClick = (e) => {
    console.log("Hello Ninjas", e);
  };
  const handleClickAgain = (name, e) => {
    console.log("Hello Ninjas " + name, e.target, e.target.value);
  };
  return (
    <>
      <div className="home">
        <h2>Homepage Component</h2>
        <button onClick={handleClick}>Click me</button>
        <button
          value="submit"
          onClick={(e) => {
            handleClickAgain("aks", e);
          }}
        >
          Click me again
        </button>
      </div>
    </>
  );
};

export default Home;
