type buttonPropos = {
  message: string;
  onClick: () => void;
  disabled?: boolean;
  opacity?: number;
};

const ButtonCount = ({ message, onClick, disabled, opacity }: buttonPropos) => {
  return (
    <button
      className={styleButton()}
      onClick={() => {
        onClick();
      }}
      disabled={disabled}
      style={{ opacity }}
    >
      {message}
    </button>
  );
};

export const styleButton = () => {
  return "flex justify-center items-center bg-black text-white rounded-lg h-11 w-36 my-6 bg-black text-white";
};

export default ButtonCount;
