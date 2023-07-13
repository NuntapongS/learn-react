import { useNavigate } from "react-router-dom";
import NavigateButton from "../components/NavigateButton";

const FourthPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between mx-80 mt-16">
      {
        <NavigateButton
          message={"Next"}
          onClick={() => navigate("")}
          disabled={true}
          opacity={0.5}
        />
      }
      <NavigateButton
        message={"Back"}
        onClick={() => navigate("/third-page")}
      />
    </div>
  );
};

export default FourthPage;
