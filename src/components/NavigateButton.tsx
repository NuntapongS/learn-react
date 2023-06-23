type NavigateButtonProps = {
  message: string;
  OnClick: () => void;
};

const NavigateButton = (props: NavigateButtonProps) => {
  return (
    <button
      className="justify-center items-center bg-black text-white rounded-lg h-11 w-36"
      onClick={props.OnClick}
    >
      {props.message}
    </button>
  );
};

export default NavigateButton;
