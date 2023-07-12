import { useNavigate } from "react-router-dom";
import NavigateButton from "../components/NavigateButton";
import { useState } from "react";

type buttonStyle = {
  background: string;
  textColor: string;
};

const SecondPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("Click to set name");
  const [text, setText] = useState("Click Me");
  const [{ background, textColor }, setButtonStyle] = useState<buttonStyle>({
    background: "bg-black",
    textColor: "text-white",
  });
  return (
    <>
      <div className="flex justify-center">
        <button
          className={`flex my-5 h-11 w-40 justify-center items-center ${background} ${textColor}`}
          onClick={() => {
            setName("Nuntapong");
            setButtonStyle({
              background: "bg-red-500",
              textColor: "text-black",
            });
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
