import { useState } from "react";

let Counter = () => {
  const [value, setCounter] = useState(0);
  const handleClick = () => setCounter(value + 1);

  return (
    <div>
      <h1>Counter: {value}</h1>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

export default Counter;
