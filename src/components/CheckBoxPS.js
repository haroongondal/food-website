import React from "react";

export default function CheckBoxPS({name = ""}) {
  return (
    <label className="col-md-2 content-CB-PS" style={{ marginLeft: "0px" }}>
      <h6 className="label-CB-PS">{name}</h6>
      <input type="checkbox" />
      <span className="checkbox-CB-PS"></span>
    </label>
  );
}
