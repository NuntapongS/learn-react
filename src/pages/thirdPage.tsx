import { useNavigate } from "react-router-dom";
import NavigateButton from "../components/NavigateButton";
import { useEffect, useState } from "react";

const ThirdPage = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [resource, setResource] = useState("posts");
  const [items, setItems] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
      .then((res) => res.json())
      .then((items) => setItems(items));
  }, [count]);

  console.log(items);

  return (
    <>
      <div className="flex justify-center gap-6 my-10">
        <button
          className="flex my-5 h-11 w-40 justify-center items-center bg-black text-white"
          onClick={() => {
            setResource("Posts");
          }}
        >
          Posts
        </button>
        <button
          className="flex my-5 h-11 w-40 justify-center items-center bg-black text-white"
          onClick={() => {
            setResource("Users");
          }}
        >
          Users
        </button>
        <button
          className="flex my-5 h-11 w-40 justify-center items-center bg-black text-white"
          onClick={() => {
            setResource("Comments");
          }}
        >
          Comments
        </button>
      </div>
      <h1 className="flex justify-center">{resource}</h1>

      <div className="flex item-center justify-center">
        <div className="flex items-center justify-center h-11 w-36 mt-16 bg-black text-white">
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            count : {count}
          </button>
        </div>
      </div>

      <div className="flex justify-center"></div>

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
