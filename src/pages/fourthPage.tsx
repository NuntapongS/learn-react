import { useNavigate } from "react-router-dom";
import NavigateButton from "../components/NavigateButton";
import ButtonSection from "../components/ButtonSection";
import { useState } from "react";

const FourthPage = () => {
  const navigate = useNavigate();
  const [resource, setResource] = useState("...");
  const [text, setText] = useState("");

  const [displayText, setDisplayText] = useState("...");
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

      <div className="flex items-center justify-center my-10">
        <input
          className="flex bg-black text-white h-10 w-40 pl-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="flex justify-center gap-5">
        <button
          className="rounded-lg h-11 w-36 bg-black text-white"
          onClick={() => {
            // เอl text ไป set ใน displayText
            setDisplayText(text);
          }}
          disabled={text === ""}
        >
          Enter
        </button>
        <button
          className="bg-black text-white rounded-lg h-11 w-36 "
          onClick={() => {
            setText("");
            setDisplayText("...");
          }}
        >
          set empty
        </button>
      </div>

      <div className="flex justify-center my-16">
        <h1 className="flex justify-center text-black">Text : {displayText}</h1>
      </div>

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
