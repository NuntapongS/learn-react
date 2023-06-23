import { useNavigate } from "react-router-dom";
import NavigateButton from "../components/NavigateButton";

const SecondPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>This page is temp.</div>
      <NavigateButton
        message={"Back"}
        OnClick={() => {
          navigate("/count-number");
        }}
      />
    </>
  );
};

export default SecondPage;
