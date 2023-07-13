import { useState } from "react";

type buttonPropos = {
  message: string;
  onClick: () => void;
  disabled?: boolean;
  opacity?: number;
};

const ButtonCount = ({ message, onClick, disabled, opacity }: buttonPropos) => {
  const [count, setCount] = useState(0);
  return (
    <button
      className={styleButton()}
      onClick={() => {
        onClick();
        setCount(count + 1);
      }}
      disabled={disabled}
      style={{ opacity }}
    >
      {message} : {count}
    </button>
  );
};

export const styleButton = () => {
  return "flex justify-center items-center bg-black text-white rounded-lg h-11 w-36 my-6";
};

export default ButtonCount;
