type NavigateButtonProps = {
  message: string;
  onClick?: () => void;
  disabled?: boolean;
  opacity?: number;
};

const NavigateButton = ({
  message,
  onClick,
  disabled,
  opacity,
}: NavigateButtonProps) => {
  return (
    <button
      className={styleButton()}
      onClick={onClick}
      disabled={disabled}
      style={{ opacity }}
    >
      {message}
    </button>
  );
};

export const styleButton = () => {
  return "justify-center items-center bg-black text-white rounded-lg h-11 w-36";
};

export default NavigateButton;
