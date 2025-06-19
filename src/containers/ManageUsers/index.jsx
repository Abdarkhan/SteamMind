import React from "react";
import Hero from "@/components/Hero";
// import useManageUser from "./hooks/useManageUser";s

const ManageUserContainer = () => {
  // const { counter, incrementCounter, decrementCounter } = useManageUser();

  return (
    <>
      {/* <div>
        <p>{counter}</p>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
      </div> */}
      <Hero title="User Management" />
    </>
  );
};

export default ManageUserContainer;
