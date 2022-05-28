import React from "react";

type TPairOrOddProps = {
  number: number;
};

export default function PairOrOdd({ number }: TPairOrOddProps) {
  const isPair = number % 2 === 0;

  return <div>{isPair ? <span>Par</span> : <span>Ímpar</span>}</div>;
}
