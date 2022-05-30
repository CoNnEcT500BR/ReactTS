import React, { useState } from "react";
import "./input.css";

export default function Input() {
  const [value, setValue] = useState("Inicial");

  function whenChange(e: any) {
    setValue(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className="inputForm">
      <h2>{value}</h2>
      <div className="inputs">
        <input value={value} onChange={whenChange} />
        <input value={value} readOnly />
        <input value={undefined} />
      </div>
    </div>
  );
}
