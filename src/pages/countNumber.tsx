import { useState } from "react";

const CountNumber = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <button
            className="flex justify-center items-center bg-black text-white rounded-lg h-11 w-36 my-6"
            onClick={() => setCount((count) => count + 1)}
          >
            increase
          </button>
        </div>
        <div className="flex justify-center">count: {count}</div>
        <div className="flex justify-center ">
          <button
            className="flex justify-center items-center bg-black text-white rounded-lg h-11 w-36 my-6 "
            disabled={count <= 0}
            onClick={() => setCount((count) => count - 1)}
          >
            decrease
          </button>
        </div>
      </div>
    </>
  );
};

export default CountNumber;
