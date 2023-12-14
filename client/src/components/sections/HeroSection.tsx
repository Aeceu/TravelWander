import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Popop from "../animation/Popop";
import SlideUp from "../animation/SlideUp";
import { useEffect, useRef } from "react";
import NavStore from "../../state/NavStore";
import BacktoTop from "../BacktoTop";

export const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const setHeroRef = NavStore((state) => state.setHeroRef);
  const handleScroll = NavStore((state) => state.handleScroll);
  const aboutRef = NavStore((state) => state.aboutRef);

  useEffect(() => {
    if (ref) {
      setHeroRef(ref);
    }
  }, [setHeroRef]);

  return (
    <div
      ref={ref}
      className="relative h-[calc(100vh-70px)] w-full flex justify-around items-center p-8"
    >
      {ref && <BacktoTop divRef={ref} />}
      <div className="w-full  h-full flex flex-col  justify-center  items-center md:p-8 gap-4">
        <SlideUp
          duration={0.7}
          delay={1}
          className="font-bold text-emerald-500  text-sm text-center"
        >
          Tailored Travel Experiences for Every Explorer
        </SlideUp>
        <SlideUp
          className="w-max bold text-4xl md:text-7xl lg:text-8xl text-emerald-900 font-semibold flex flex-col items-center justify-center"
          delay={0.5}
          duration={1}
        >
          <h1 className="  ">Stay Curious,</h1>
          <h1 className=" ">Travel Furious.</h1>
        </SlideUp>
        <SlideUp
          delay={0.7}
          duration={1}
          className="text-slate-950 w-full md:w-3/4 text-sm md:text-base text-center"
        >
          Embark on a journey fueled by curiosity and passion.{" "}
          <i className="text-emerald-900 font-bold ">TravelWander </i>
          invites you to explore with intensity, embracing the thrill of every
          adventure with unstoppable wanderlust.
        </SlideUp>

        <span className="flex flex-wrap justify-center items-center gap-2 py-8 ">
          <Popop delay={1.35}>
            <Link
              to="/map"
              className="rounded-full px-8 py-1 shadow-lg bg-emerald-300 text-emerald-900"
            >
              Start Exploring
            </Link>
          </Popop>
          <Popop delay={1.45}>
            <button
              onClick={() => handleScroll(aboutRef)}
              className="rounded-full px-6 py-1 shadow-lg flex  items-center gap-1 border border-emerald-900 hover:scale-110 duration-300 transition-all"
            >
              or learn more <FaArrowRightLong />
            </button>
          </Popop>
        </span>
      </div>
    </div>
  );
};
