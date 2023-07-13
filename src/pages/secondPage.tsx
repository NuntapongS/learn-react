import { useNavigate } from "react-router-dom";
import NavigateButton from "../components/NavigateButton";
import { useState } from "react";

type buttonStyle = {
  name: string;
  background: string;
  textColor: string;
  isShow: boolean;
};

type buttonClickMeMessage = {
  message: string;
  backgroundMessage: string;
  textColorMessage: string;
};

const SecondPage = () => {
  const navigate = useNavigate();
  const [{ message, backgroundMessage, textColorMessage }, setText] =
    useState<buttonClickMeMessage>({
      message: "Click me",
      backgroundMessage: "bg-black",
      textColorMessage: "text-white",
    });
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
          className={`flex my-5 h-11 w-40 justify-center items-center ${backgroundMessage} ${textColorMessage}`}
          onClick={() => {
            setText(
              message === "Click me"
                ? {
                    message: "Hello",
                    backgroundMessage: "bg-red-500",
                    textColorMessage: "text-black",
                  }
                : {
                    message: "Click me",
                    backgroundMessage: "bg-black",
                    textColorMessage: "text-white",
                  }
            );
          }}
        >
          {message}
        </button>
      </div>
      <div className="flex justify-between mx-80 mt-16">
        <NavigateButton
          message={"Next"}
          onClick={() => {
            navigate("/third-page");
          }}
        />
        <NavigateButton
          message={"Back"}
          onClick={() => navigate("/count-number")}
        />
      </div>
    </>
  );
};

export default SecondPage;
