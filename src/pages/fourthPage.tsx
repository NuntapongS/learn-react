import { useNavigate } from "react-router-dom";
import NavigateButton from "../components/NavigateButton";
import ButtonSection from "../components/ButtonSection";
import { useState } from "react";

const FourthPage = () => {
  const navigate = useNavigate();
  const [resource, setResource] = useState("...");
  return (
    <>
      <div className="flex justify-center gap-6 my-10">
        <ButtonSection
          textButton={"Posts"}
          colorActive={"bg-red-500 text-white"}
          // resource ก่อนกดปุ่มจะเป็น "..."
          onClickSection={() =>
            resource !== "Posts" ? setResource("Posts") : setResource("...")
          }
          isActive={resource === "Posts"}
        />
        <ButtonSection
          textButton={"Users"}
          colorActive={"bg-yellow-500 text-white"}
          onClickSection={() =>
            resource !== "Users" ? setResource("Users") : setResource("...")
          }
          isActive={resource === "Users"}
        />
        <ButtonSection
          textButton={"Comments"}
          colorActive={"bg-green-500 text-white"}
          onClickSection={() =>
            resource !== "Comments"
              ? setResource("Comments")
              : setResource("...")
          }
          isActive={resource === "Comments"}
        />
      </div>
      <h1 className="flex justify-center">{resource}</h1>
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
    </>
  );
};

export default FourthPage;
