import React from "react";
import Skeleton from "react-loading-skeleton";
import { useState } from "react/cjs/react.development";
import arrow from "../images/down_arrow.svg";
import useFetch from "../Utils/useFetch";

export default function PopupMenuADD(props) {

  const {data, isPending, error} = useFetch("https://api.masairapp.com/api/Lov/GetCusine")

  const [subCusine, setSubCusine] = useState("");

  const [cusineId, setCusineId] = useState("-1");


  const handleSubmit = (e) => {
    console.log(subCusine + "  ==  " + cusineId )
    e.preventDefault();
    if (subCusine !== "" && cusineId !== "")
    {
      const values = {
        Id: 1,
        Name: subCusine,
        Description: "",
        ParentId: cusineId,
        IsActive: true,
        IsPopular: null,
        ResponseCode: null,
        ResponseMessage: null,
    }

    console.log(values)
    fetch("https://api.masairapp.com/api/cusine/AddCusine",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer 92fqP7-myXsDG2gP6NkxP5JEZvLzZkRU4iCDU3queuq545jO8O9mcYWzuOTLH-yuuS2ATp1F7jKUPU4Ec1llWI5WXKVgKtY8ZzigZSYi64_TFzvfSW9kYtQXUI0E7WGJOx4LPiw0Qvj0LcmnIJiBECMwrTbTHBFKfMwXB7QkmT8aCicLVgc5rUyD1K3WOkB6_hbyOCgyFddE1vOFTZyp7g"
            
        },
        body:JSON.stringify(values)
     
    }).then((result)=> result.json())
    .then((data) => {
      console.log(data)
     if (!data.ResponseMessage) {
        
     }
    })
    .catch((error)=>{
        console.log(error)
    })
}
    
    
  }

  return (
    <div>
      <div className="title-popup">
        <h6>Add Menu</h6>
      </div>

      <div className="text-webkit-center">
      <div className="border-menu">
        <div className="col-md-12 Sec-menu mb-4">
          <div className="label-PS text-lg-start">Cuisines</div>
          <div className="dropdown-PS">
            <select onChange = {e => setCusineId(e.target.value)}>
            {isPending && <div><Skeleton/></div>}
            {error && <div>{error}</div>}
            {data && data.map(c => <option className="option" value = {c.Id}>{c.Value}</option>)}
            </select>
            <span className="Darrow">
              <img
                alt="down-arrow"
                src="/static/media/down_arrow.5b0512cf.svg"
              />
            </span>
          </div>
        </div>

        <div className="col-md-12 Sec-menu">
          
            <div className="label-PS text-lg-start">Category Name</div>
            <input type="text" placeholder="Pizza" onChange = {e => setSubCusine(e.target.value)}
             className="input-PS" required />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="row m-auto">
        <div className="col-md-12 d-flex mb-2 pr-0 justify-content-center">
          <button
            type="submit"
            className="blue-btn"
            onClick = {(e) => handleSubmit(e)}
            style={{ marginRight: "20px" }}
          >
            Save
          </button>
          <button className="green-btn" onClick={(e) => props.click(e)}>Cancel</button>
        </div>
      </div>
      </div>
    
  );
}
