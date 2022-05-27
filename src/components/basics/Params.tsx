import React from "react";

type TParamsProps = {
  title: string;
  student: string;
  note: number;
};

export default function Params({ title, student, note }: TParamsProps) {
  const status = note >= 7 ? "Aprovado(a)!" : "Reprovado(a)!";

  return (
    <div>
      <h2>{title}</h2>
      <p>
        <strong>{student}</strong> tem nota <strong>{note}</strong> e foi{" "}
        <strong>{status}</strong>
      </p>
    </div>
  );
}
