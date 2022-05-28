import React from "react";

import "./Card.css";

type TCardProps = {
  title: string;
  children: React.ReactNode;
};

export default function Card({ title, children }: TCardProps) {
  let RandomColor = [];

  for (let index = 0; index < 3; index++) {
    RandomColor.push(`${Math.floor(Math.random() * 255)}`);
  }

  let [R, G, B] = RandomColor;
  const RGB = `rgb(${R}, ${G}, ${B})`;

  const cardStyle = {
    backgroundColor: RGB || "#F6E683",
    borderColor: RGB || "#F6E683",
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="title">{title}</div>
      <div className="content">{children}</div>
    </div>
  );
}
