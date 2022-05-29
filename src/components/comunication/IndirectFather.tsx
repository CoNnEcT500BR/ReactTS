import React from "react";
import IndirectChildren from "./IndirectChildren";

export default function IndirectFather() {
  function Info(name: string, age: number, nerd: boolean) {
    console.log(name, age, nerd);
  }

  return (
    <div>
      <div>Pai</div>
      <IndirectChildren whenClick={Info}></IndirectChildren>
    </div>
  );
}
