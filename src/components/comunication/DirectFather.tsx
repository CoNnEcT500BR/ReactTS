import React from "react";
import DirectChildren from "./DirectChildren";

export default function DirectFather() {
  return (
    <div>
      <DirectChildren text="Alicia" number={18} bool={false} />
      <DirectChildren text="Pedro" number={32} bool={true} />
    </div>
  );
}
