import React, { useState } from "react";
import IndirectChildren from "./IndirectChildren";

export default function IndirectFather() {
  let [name, setName] = useState("?");
  let [age, setAge] = useState(0);
  let [nerd, setNerd] = useState(false);

  function Info(name: string, age: number, nerd: boolean) {
    setName(name);
    setAge(age);
    setNerd(nerd);
  }

  return (
    <div>
      <div>
        <span>{name} </span>
        <span>
          <strong>{age}</strong>
        </span>
        <span> {nerd ? "Verdadeiro" : "Falso"}</span>
      </div>
      <IndirectChildren whenClick={Info}></IndirectChildren>
    </div>
  );
}
