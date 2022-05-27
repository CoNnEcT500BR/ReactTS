import React from "react";
import Card from "../layout/Card";

type TCardsProps = {
  title: string;
  children: React.ReactNode;
};

export default function Cards({ title, children }: TCardsProps) {
  let RandomColor = [];

  for (let index = 0; index < 3; index++) {
    RandomColor.push(`${Math.floor(Math.random() * 255)}`);
  }

  let [R, G, B] = RandomColor;
  const RGB = `rgb(${R}, ${G}, ${B})`;

  return (
    <Card title={title} color={RGB}>
      {children}
    </Card>
  );
}
