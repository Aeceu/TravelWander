import { motion } from "framer-motion";

type TProps = {
  className?: string;
  delay?: number;
  duration?: number;
  children: React.ReactNode | string;
};

const Popop = ({ className, children, delay = 0, duration = 0 }: TProps) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{
        scale: 1,
        transition: {
          delay: delay,
          duration: duration,
          type: "spring",
          stiffness: "100",
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
export default Popop;
