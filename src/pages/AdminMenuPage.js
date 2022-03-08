import React from "react";
import "../styles/AdminMenuPage.css";
import { useState } from "react";
import MenuComponent from "../components/MenuComponent";
import AdminMenuItem from "../components/AdminMenuItem";
import useFetch from "../Utils/useFetch";
import Skeleton from "react-loading-skeleton";

function AdminMenuPage() {
  const [searchValue, setSearchValue] = useState("");

  
  const [outLetId, setOutLetId] = useState();
  
  const handleId = (value) => setOutLetId(value);
  const { data, isPending, error } = useFetch(
    "https://api.masairapp.com/api/Lov/GetCusineByRestaurantId?id=" + outLetId
  );
  console.log(searchValue);
  return (
    <div>
      <MenuComponent setOutLetId = {handleId}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />
      {isPending && (
        <div>
          <Skeleton />
        </div>
      )}
      {error && <div>{error}</div>}
      {data &&
        data
          .filter((v) => {
            return searchValue === ""
              ? v
              : v.Cusine.toLowerCase().includes(searchValue.toLowerCase());
          })
          .map((dt) => <AdminMenuItem data={dt} />)}
    </div>
  );
}

export default AdminMenuPage;
