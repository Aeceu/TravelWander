import { Link } from "react-router-dom";
import AppearOnView from "../animation/AppearOnView";

export const InfoSection = () => {
  return (
    <div className="overflow-hidden   h-full flex p-8 md:px-8 md:flex-row flex-col">
      <AppearOnView
        delay={0.5}
        duration={0.5}
        direction="left"
        className="w-full md:w-1/2"
      >
        <img src="./map.png" alt="img" />
      </AppearOnView>
      <AppearOnView
        delay={0.5}
        duration={0.5}
        direction="right"
        className="w-full md:w-1/2 flex flex-col items-end justify-center gap-4"
      >
        <h1 className="w-full bold text-3xl md:text-6xl text-emerald-900 font-bold text-center md:text-right">
          Explore the World, Your Way
        </h1>
        <p className="w-full text-center md:text-justify">
          Unleash the spirit of adventure and{" "}
          <b className="text-emerald-900">discover endless possibilities</b> as
          you navigate the world on your terms with TravelWander. Our platform
          empowers you to tailor your journeys effortlessly, ensuring each
          exploration is uniquely yours.
        </p>
        <span className="w-full flex flex-wrap items-center justify-center md:justify-start gap-2 py-8">
          <Link
            to={"/map"}
            className="rounded-full px-8 py-1 bg-emerald-300 text-emerald-900 hover:scale-110 duration-300 transition-all shadow-xl cursor-pointer"
          >
            Start Exploring
          </Link>
        </span>
      </AppearOnView>
    </div>
  );
};
