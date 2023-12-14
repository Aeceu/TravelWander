import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type TProps = {
  children: React.ReactNode | string;
  className: string;
  delay?: number;
  duration?: number;
  direction: string;
};

const AppearOnView = ({
  children,
  className,
  delay = 0,
  duration = 0,
  direction,
}: TProps) => {
  const mainControl = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControl.start("animate");
    }
  }, [isInView, mainControl]);

  return (
    <motion.div
      variants={{
        initial: {
          x: direction === "left" ? -200 : 200,
          opacity: 0,
        },
        animate: {
          x: 0,
          opacity: 1,
          transition: {
            delay: delay,
            duration: duration,
          },
        },
      }}
      initial="initial"
      animate={mainControl}
      ref={ref}
      className={className}
    >
      {children}
    </motion.div>
  );
};
export default AppearOnView;
