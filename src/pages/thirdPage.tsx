import { useNavigate } from "react-router-dom";
import NavigateButton from "../components/NavigateButton";
import { useEffect, useState } from "react";

interface Items {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city?: string;
    street?: string;
    suite?: string;
    zipcode?: string;
  };
  company?: {
    name?: string;
    catchPhrase?: string;
    bs?: string;
  };
}

const ThirdPage = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [resource, setResource] = useState("posts");
  const [items, setItems] = useState<Items>({
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
      city: "",
      street: "",
      suite: "",
      zipcode: "",
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
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

      <div className="flex flex-col justify-center items-center my-10">
        <div>Id: {items.id}</div>
        <div>Name: {items.name}</div>
        <div>Username: {items.username}</div>
        <div>Email: {items.email}</div>
        {items.address && items.address.city ? (
          <div>
            Address: {items.address.city} , {items.address.street} ,{" "}
            {items.address.suite} , {items.address.zipcode} ,
          </div>
        ) : (
          <div>Address: N/A</div>
        )}
        {items.company && items.company.name ? (
          <div>
            Company: {items.company.name} , {items.company.catchPhrase} ,{" "}
            {items.company.bs}
          </div>
        ) : (
          <div>Company: N/A</div>
        )}
      </div>

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
