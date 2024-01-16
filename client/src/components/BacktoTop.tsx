import { FaArrowUpLong } from "react-icons/fa6";
import { motion, useAnimation, useInView } from "framer-motion";
import { RefObject, useEffect } from "react";

type TProps = {
  divRef: RefObject<HTMLDivElement>;
};

const BacktoTop = ({ divRef }: TProps) => {
  const isInView = useInView(divRef);
  const mainControl = useAnimation();

  useEffect(() => {
    if (!isInView) {
      mainControl.start("animate");
    } else {
      mainControl.start("initial");
    }
  }, [isInView, mainControl]);

  return (
    <motion.div
      variants={{
        initial: {
          x: 100,
        },
        animate: {
          x: 0,
        },
      }}
      initial="initial"
      animate={mainControl}
      className="z-50 fixed bottom-5 right-5 h-[40px] w-[40px] shadow-2xl rounded-full bg-emerald-500 flex items-center justify-center cursor-pointer hover:scale-110 duration-300 transition-all"
    >
      <FaArrowUpLong
        className="text-white "
        size="1.5rem"
        onClick={() => window.scrollTo(0, 0)}
      />
    </motion.div>
  );
};
export default BacktoTop;
