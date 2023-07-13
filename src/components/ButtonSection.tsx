const ButtonSection = ({
  textButton,
  colorActive,
  onClickSection,
  isActive,
}: {
  textButton: string;
  colorActive: string;
  onClickSection: () => void;
  isActive: boolean;
}) => {
  return (
    <button
      className={`flex my-5 h-11 w-40 justify-center items-center ${
        isActive ? colorActive : "bg-black text-white"
      }`}
      onClick={() => onClickSection()}
    >
      {textButton}
    </button>
  );
};

export default ButtonSection;
