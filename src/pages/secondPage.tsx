import { useNavigate } from "react-router-dom";
import NavigateButton from "../components/NavigateButton";
import { useState } from "react";

const SecondPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("Click to set name");
  const [text, setText] = useState("Click Me");
  const [background, setBackground] = useState("bg-black");
  return (
    <>
      <div className="flex justify-center">
        <button
          className={`flex my-5 h-11 w-40 justify-center items-center ${background} text-white`}
          onClick={() => {
            setName("Nuntapong");
            setBackground("bg-red-500");
          }}
        >
          {name}
        </button>
      </div>

      <div className="flex justify-center">
        <button
          className="flex my-5 h-11 w-40 justify-center items-center bg-black text-white"
          onClick={() => {
            setText("Thank you");
          }}
        >
          {text}
        </button>
      </div>
      <div className="flex justify-between mx-80 mt-16">
        <NavigateButton
          message={"Next"}
          OnClick={() => {
            navigate("/third-page");
          }}
        />
        <NavigateButton
          message={"Back"}
          OnClick={() => navigate("/count-number")}
        />
      </div>
    </>
  );
};

export default SecondPage;
