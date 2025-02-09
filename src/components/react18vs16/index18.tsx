import { useState } from "react";

const AsyncButton = () => {
  const [count, setCount] = useState<number>(0);
  const [flag, setFlag] = useState(false);

  const [countST, setCountST] = useState<number>(10);
  const [flagST, setFlagST] = useState(false);

  const  handleClick = () => {
    setCount(c => c + 1); // Does not re-render yet
    setFlag(f => !f); // Does not re-render yet
    // React will only re-render once at the end (that's batching!)
  }

  const handleSetTimeoutClick= ()=> {
    setTimeout(() => {
      setCountST(c => c + 1);
      setFlagST(f => !f);
    }, 500);
  }

  return (
    <div>
      <button onClick={handleClick}>one</button>
      <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
      <button onClick={handleSetTimeoutClick}>two</button>
      <h1 style={{ color: flagST ? "blue" : "black" }}>{countST}</h1>
    </div>
  );
}

export default AsyncButton

