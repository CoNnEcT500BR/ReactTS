import { ReactNode } from "react";

type TExpressionProps = {
  test: boolean | string | undefined;
  children: ReactNode;
};

export default function Expression({ test, children }: TExpressionProps) {
  return test ? <>{children}</> : <></>;
}
