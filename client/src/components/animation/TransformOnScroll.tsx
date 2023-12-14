import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

type TProps = {
  children?: React.ReactNode | string;
  className?: string;
};

const TransformOnScroll = ({ children, className }: TProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "2 1"],
  });

  const spring = useSpring(scrollYProgress, { mass: 0.1, restDelta: 0.0001 });

  const width = useTransform(spring, (progress) => progress * 50 + "%");

  return (
    <motion.div
      style={{
        width,
      }}
      ref={ref}
      className={className}
    >
      {children}
    </motion.div>
  );
};
export default TransformOnScroll;
