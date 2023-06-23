type buttonPropos = {
  message: string;
  onClick: () => void;
  disabled?: boolean;
};

const ButtonCount = (props: buttonPropos) => {
  return (
    <button
      className="flex justify-center items-center bg-black text-white rounded-lg h-11 w-36 my-6"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.message}
    </button>
  );
};

export default ButtonCount;
