import { useNavigate } from "react-router-dom";
import NavigateButton from "../components/NavigateButton";
import { useEffect, useState } from "react";

import ButtonCount from "../components/Countbutton";
import ButtonSection from "../components/ButtonSection";

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
  const [resource, setResource] = useState("...");
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

  const onClickSection = (section: string) => {
    resource !== section ? setResource(section) : setResource("...");
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
      .then((res) => res.json())
      //data : คือข้อมูลที่ได้จากการ fetch ที่เก็บไว้ใน res
      .then((data) => setItems(data));
  }, [count]);

  console.log(items);

  return (
    <>
      <div className="flex justify-center gap-6 my-10">
        <ButtonSection
          textButton={"Posts"}
          colorActive={"bg-red-500 text-white"}
          // resource ก่อนกดปุ่มจะเป็น "..."
          onClickSection={() => onClickSection("Posts")}
          isActive={resource === "Posts"}
        />
        <ButtonSection
          textButton={"Users"}
          colorActive={"bg-yellow-500 text-white"}
          onClickSection={() => onClickSection("Users")}
          isActive={resource === "Users"}
        />
        <ButtonSection
          textButton={"Comments"}
          colorActive={"bg-green-500 text-white"}
          onClickSection={() => onClickSection("Comments")}
          isActive={resource === "Comments"}
        />
      </div>
      <h1 className="flex justify-center">{resource}</h1>
      <div className="flex item-center justify-center">
        <div className="flex items-center justify-center h-11 w-36 mt-16 ">
          <div className="flex gap-4">
            <ButtonCount
              message="Increase"
              onClick={() => {
                setCount(count + 1);
              }}
              disabled={count >= 10}
              opacity={count >= 10 ? 0.5 : 1}
            />
            <ButtonCount
              message="Decrease"
              onClick={() => {
                setCount(count - 1);
              }}
              disabled={count <= 0}
              opacity={count <= 0 ? 0.5 : 1}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center my-14">count: {count}</div>

      <div className="flex flex-col justify-center my-28 mx-96">
        <div className="flex">
          <div className="mr-3 font-bold">Id: </div>
          <div>{items.id}</div>
        </div>

        <div className="flex">
          <div className="mr-3 font-bold">Name: </div>
          <div>{items.name}</div>
        </div>

        <div className="flex">
          <div className="mr-3 font-bold">Username: </div>
          <div>{items.username}</div>
        </div>

        <div className="flex">
          <div className="mr-3 font-bold">Email: </div>
          <div>{items.email}</div>
        </div>

        {items.address && items.address.city ? (
          <div className="flex">
            <div className="mr-3 font-bold">Address:</div>
            <div>
              {items.address.street} , {items.address.suite} ,{" "}
              {items.address.city} , {items.address.zipcode}
            </div>
          </div>
        ) : (
          <div className="flex">
            <div className="mr-3 font-bold">Address: </div>
            <div>N/A</div>
          </div>
        )}
        {items.company && items.company.name ? (
          <div className="flex">
            <div className="mr-3 font-bold">Company: </div>
            <div>
              {items.company.name} , {items.company.catchPhrase} ,{" "}
              {items.company.bs}
            </div>
          </div>
        ) : (
          <div className="flex">
            <div className="mr-3 font-bold">Company: </div>
            <div>N/A</div>
          </div>
        )}
      </div>

      <div className="flex justify-between mx-80 mt-16">
        {
          <NavigateButton
            message={"Next"}
            onClick={() => navigate("/fourth-page")}
          />
        }
        <NavigateButton
          message={"Back"}
          onClick={() => navigate("/second-page")}
        />
      </div>
    </>
  );
};

export default ThirdPage;
