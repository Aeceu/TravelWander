import { MutableRefObject } from "react";

type TProps = {
  ref: MutableRefObject<HTMLDivElement | null>;
};

const useScrollTo = () => {
  const scrollTo = ({ ref }: TProps) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return scrollTo;
};
export default useScrollTo;
