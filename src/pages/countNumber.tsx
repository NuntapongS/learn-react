import { useState } from "react";
import ButtonCount from "../components/button";

const CountNumber = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <ButtonCount
            message={"Increase"}
            onClick={() => setCount((count) => count + 1)}
          />
        </div>
        <div className="flex justify-center">count: {count}</div>
        <div className="flex justify-center ">
          <ButtonCount
            message={"Decrease"}
            onClick={() => setCount((count) => count - 1)}
            disabled={count === 0}
          />
        </div>
      </div>
    </>
  );
};

export default CountNumber;
