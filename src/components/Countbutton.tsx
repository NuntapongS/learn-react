type buttonPropos = {
  message: string;
  onClick: () => void;
  disabled?: boolean;
};

const ButtonCount = ({ message, onClick, disabled }: buttonPropos) => {
  return (
    <button className={styleButton()} onClick={onClick} disabled={disabled}>
      {message}
    </button>
  );
};

export const styleButton = () => {
  return "flex justify-center items-center bg-black text-white rounded-lg h-11 w-36 my-6";
};

export default ButtonCount;
