import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <NavBar />
      <LandingPage />
      <About />
    </div>
  );
};

export default Home;

export const LandingPage = () => {
  return (
    <div className=" h-[calc(100vh-70px)] w-full flex justify-around items-center p-8">
      <div className="w-full  h-full flex flex-col  justify-center  items-center md:p-8 gap-4">
        <p className="font-bold text-emerald-500  text-sm ">
          Tailored Travel Experiences for Every Explorer
        </p>
        <span className="w-max bold text-5xl md:text-7xl lg:text-8xl text-emerald-900 font-semibold flex flex-col items-center justify-center">
          <h1 className="  ">Stay Curious,</h1>
          <h1 className=" ">Travel Furious.</h1>
        </span>
        <p className="text-slate-950 w-full md:w-3/4 text-sm md:text-base text-center">
          Embark on a journey fueled by curiosity and passion.{" "}
          <i className="text-emerald-900 font-bold ">TravelWander </i>
          invites you to explore with intensity, embracing the thrill of every
          adventure with unstoppable wanderlust.
        </p>
        <span className="flex items-center gap-2 py-8 ">
          <Link
            to="/map"
            className="rounded-full px-8 py-1 shadow-lg bg-emerald-300 text-emerald-900"
          >
            Start Exploring
          </Link>
          <Link
            to="/about"
            className="rounded-full px-6 py-1 shadow-lg flex  items-center gap-1 border border-emerald-900"
          >
            or learn more <FaArrowRightLong />
          </Link>
        </span>
      </div>
    </div>
  );
};

export const About = () => {
  return (
    <div className="w-full h-full flex flex-col ">
      <img
        src="./img.jpg"
        alt="map"
        className="object-cover object-center h-[500px] w-full"
      />
      <div className="p-8 flex">
        <div className="w-1/2 flex flex-col justify-center gap-4">
          <h1 className="w-full bold text-6xl text-emerald-900 font-bold ">
            Manage all your travels
          </h1>
          <p className="text-justify w-full">
            Saves up to 2x of your time commuting by observing and creating plan
            with TravelWander!
          </p>
          <span className="flex items-center gap-2 py-8">
            <Link
              to={"/map"}
              className="rounded-full px-8 py-1 bg-emerald-300 text-emerald-900"
            >
              Open Map
            </Link>
            <Link
              to={"/map"}
              className="rounded-full px-8 py-1 border border-emerald-900 text-emerald-900"
            >
              Open Profile
            </Link>
          </span>
        </div>
        <div className="w-1/2">
          <img src="./open-map.png" alt="map" />
        </div>
      </div>
    </div>
  );
};
