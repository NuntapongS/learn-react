import { useNavigate } from "react-router-dom";
import NavigateButton from "../components/NavigateButton";
import { useState } from "react";

type buttonStyle = {
  name: string;
  background: string;
  textColor: string;
  isShow: boolean;
};

const SecondPage = () => {
  const navigate = useNavigate();

  const [text, setText] = useState("Click Me");
  const [{ name, background, textColor, isShow }, setButtonStyle] =
    useState<buttonStyle>({
      name: "Click to set name",
      background: "bg-black",
      textColor: "text-white",
      isShow: false,
    });
  return (
    <>
      <div className="flex justify-center">
        <button
          className={`flex my-5 h-11 w-40 justify-center items-center ${background} ${textColor}`}
          onClick={() => {
            setButtonStyle(
              !isShow
                ? {
                    name: "Nuntapong",
                    background: "bg-red-500",
                    textColor: "text-black",
                    isShow: true,
                  }
                : {
                    name: "Click to set name",
                    background: "bg-black",
                    textColor: "text-white",
                    isShow: false,
                  }
            );
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
