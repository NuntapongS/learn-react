import { useNavigate } from "react-router-dom";
import NavigateButton from "../components/NavigateButton";

const SecondPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center">This page is temp 2.</div>
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
