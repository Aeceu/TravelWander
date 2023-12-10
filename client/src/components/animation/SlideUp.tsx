import { motion } from "framer-motion";

type TProps = {
  className: string;
  delay?: number;
  duration?: number;
  children: React.ReactNode | string;
};

const SlideUp = ({ children, className, delay = 0, duration = 0 }: TProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: duration, delay: delay },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
export default SlideUp;
