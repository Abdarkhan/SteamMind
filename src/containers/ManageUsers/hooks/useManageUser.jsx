import { useState } from "react";

const useManageUser = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrementCounter = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };
  return { incrementCounter, decrementCounter, counter };
};

export default useManageUser;
