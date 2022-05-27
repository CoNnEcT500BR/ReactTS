import React from "react";

import "./Card.css";

type TCardProps = {
  title: string;
  color: string;
  children: React.ReactNode;
};

export default function Card({ title, color, children }: TCardProps) {
  const cardStyle = {
    backgroundColor: color || "#F6E683",
    borderColor: color || "#F6E683",
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="title">{title}</div>
      <div className="content">{children}</div>
    </div>
  );
}
