import React from "react";

type TDirectChildrenProps = {
  text: string;
  number: number;
  bool: boolean;
};

export default function DirectChildren({
  text,
  number,
  bool,
}: TDirectChildrenProps) {
  return (
    <div>
      <span>{text} </span>
      <span>
        <strong>{number}</strong>
      </span>
      <span> {bool ? "Verdadeiro" : "Falso"}</span>
    </div>
  );
}
