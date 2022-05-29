import React from "react";

type TIndirectChildrenProps = {
  whenClick: Function;
};

export default function IndirectChildren({
  whenClick,
}: TIndirectChildrenProps) {
  return (
    <div>
      <div>Filho</div>
      <button onClick={(_) => whenClick("João", 53, false)}>
        Fornecer Informações
      </button>
    </div>
  );
}
