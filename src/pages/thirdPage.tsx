import { useNavigate } from "react-router-dom";
import NavigateButton from "../components/NavigateButton";

const ThirdPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center">This page is temp 3.</div>
      <div className="flex justify-between mx-80 mt-16">
        {
          <NavigateButton
            message={"Next"}
            OnClick={() => {
              navigate("");
            }}
            disabled={true}
            opacity={0.5}
          />
        }
        <NavigateButton
          message={"Back"}
          OnClick={() => navigate("/second-page")}
        />
      </div>
    </>
  );
};

export default ThirdPage;
