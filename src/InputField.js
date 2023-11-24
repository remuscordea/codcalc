import React from "react";

const InputField = ({ label, name, value, onChange }) => (
  <div style={{ height: "70px" }}>
    <label>
      <span>{label}</span>
      <br />
      <input
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        style={{ width: "80px" }}
      />
    </label>
    <br />
    <br />
  </div>
);

export default InputField;
