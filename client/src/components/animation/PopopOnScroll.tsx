import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type TProps = {
  children?: React.ReactNode | string;
  className?: string;
};

const PopopOnScroll = ({ children, className }: TProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.55 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div style={{ scale }} className={className}>
      {children}
    </motion.div>
  );
};
export default PopopOnScroll;
