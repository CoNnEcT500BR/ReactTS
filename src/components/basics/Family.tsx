import { cloneElement, ReactElement } from "react";

type TFamilyProps = {
  surname: string;
  children: ReactElement[];
};

export default function Family({ children, ...rest }: TFamilyProps) {
  return (
    <div>
      {children.map((child, i) => cloneElement(child, { ...rest, key: i }))}
    </div>
  );
}
