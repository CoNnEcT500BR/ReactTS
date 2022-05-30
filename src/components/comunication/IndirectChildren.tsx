import React from "react";

type TIndirectChildrenProps = {
  whenClick: Function;
};

export default function IndirectChildren({
  whenClick,
}: TIndirectChildrenProps) {
  const genAge = () => Math.floor(Math.random() * 20) + 50;
  const genNerd = () => Math.random() > 0.5;

  return (
    <div>
      <div>Filho</div>
      <button onClick={(_) => whenClick("João", genAge(), genNerd())}>
        Fornecer Informações
      </button>
    </div>
  );
}
