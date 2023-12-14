import { Link } from "react-router-dom";
import AppearOnView from "../animation/AppearOnView";
import NavStore from "../../state/NavStore";
import { useEffect, useRef } from "react";

export const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const setAboutRef = NavStore((state) => state.setAboutRef);

  useEffect(() => {
    if (ref) {
      setAboutRef(ref);
    }
  }, [setAboutRef]);

  return (
    <div className="overflow-hidden w-full h-full flex flex-col ">
      <img
        src="./img.jpg"
        alt="map"
        className="object-cover object-center h-[500px] w-full"
      />
      <div ref={ref} className="p-8 md:px-8 flex md:flex-row flex-col">
        <AppearOnView
          delay={0.5}
          duration={0.5}
          direction="left"
          className="w-full md:w-1/2 flex flex-col justify-center gap-4"
        >
          <h1 className="w-full bold text-3xl md:text-6xl text-emerald-900 font-bold text-center md:text-left">
            Streamline Your Travel Management
          </h1>
          <p className="w-full text-center md:text-justify">
            <b className="text-emerald-900">Save up to 2x</b> the time commuting
            by efficiently{" "}
            <b className="text-emerald-900">planning and organizing</b> your
            journeys with TravelWander!
          </p>
          <span className="flex flex-wrap items-center justify-center md:justify-start gap-2 py-8">
            <Link
              to={"/map"}
              className="rounded-full px-8 py-1 bg-emerald-300 text-emerald-900 hover:scale-110 duration-300 transition-all shadow-xl cursor-pointer"
            >
              Open Map
            </Link>
          </span>
        </AppearOnView>

        <AppearOnView
          delay={0.5}
          duration={0.5}
          direction="right"
          className="w-full md:w-1/2"
        >
          <img src="./open-map.png" alt="map" />
        </AppearOnView>
      </div>
    </div>
  );
};
