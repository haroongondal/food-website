import React from "react";
import { useState } from "react";

export default function CheckBoxPS({name = ""}) {

  const [checkbox,setCheckbox] = useState(false)
  return (
    <label className="col-md-6 col-6 content-CB-PS" style={{ marginLeft: "0px" }}>
      <h6 className="label-CB-PS">{name}</h6>
      <input type="checkbox" onChange={(e) => setCheckbox(e.target.checked)}/>
      <span className="checkbox-CB-PS"></span>
    </label>
  );
}
