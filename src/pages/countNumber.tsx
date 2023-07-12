import { useState } from "react";
import ButtonCount from "../components/Countbutton";
import { useNavigate } from "react-router-dom";
import NavigateButton from "../components/NavigateButton";

const CountNumber = () => {
  const navigate = useNavigate();
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
      <div className="flex justify-between mx-80 mt-16">
        <NavigateButton
          message={"Next"}
          onClick={() => {
            navigate("/second-page");
          }}
        />
        <NavigateButton message={"Back"} disabled={true} opacity={0.5} />
      </div>
    </>
  );
};

export default CountNumber;
