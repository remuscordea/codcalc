import React from "react";
import "./InputField.css";

const InputField = ({ label, name, value, onChange, placeholder }) => (
  <div style={{ height: "50px" }}>
    <label>
      <span>{label}</span>
      <br />
      <input
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        style={{ width: "100px" }}
        placeholder={placeholder ? placeholder : "0"}
      />
    </label>
    <br />
    <br />
  </div>
);

export default InputField;
