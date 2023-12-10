import { FaArrowRightLong } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import { IoMdKey } from "react-icons/io";
import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import SlideUp from "../components/animation/SlideUp";
import Popop from "../components/animation/Popop";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <NavBar />
      <LandingPage />
      <About />
      <CarSection />
      <AnotherSection />
    </div>
  );
};

export default Home;

export const LandingPage = () => {
  return (
    <div className=" h-[calc(100vh-70px)] w-full flex justify-around items-center p-8">
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
            <Link
              to="/about"
              className="rounded-full px-6 py-1 shadow-lg flex  items-center gap-1 border border-emerald-900"
            >
              or learn more <FaArrowRightLong />
            </Link>
          </Popop>
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
      <div className="p-8 md:px-8 flex md:flex-row flex-col">
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-4">
          <h1 className="w-full bold text-6xl text-emerald-900 font-bold text-center md:text-left">
            Manage all your travels
          </h1>
          <p className=" w-full text-center md:text-justify">
            <b className="text-emerald-900">Saves up to 2x</b> of your time
            commuting by{" "}
            <b className="text-emerald-900">observing and creating </b> plan
            with TravelWander!
          </p>
          <span className="flex flex-wrap items-center justify-center md:justify-start gap-2 py-8">
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
        <div className="w-full md:w-1/2">
          <img src="./open-map.png" alt="map" />
        </div>
      </div>
    </div>
  );
};

export const CarSection = () => {
  return (
    <div className="w-full h-full py-16  flex flex-col items-center">
      <h1 className="p-4 text-2xl md:text-4xl text-emerald-900 font-bold py-8 text-center">
        Discover the vehicles that suit you perfectly!
      </h1>

      <div className=" w-full flex items-center gap-2 flex-col md:flex-row ">
        <div className="w-full md:w-1/4 flex  items-center ">
          <div className="hidden md:flex p-2 bg-emerald-300 w-full h-[100px]  md:w-[500px] md:h-[200px] rounded-r-full  items-center justify-end">
            <div className="w-[80px] h-[80px] md:w-[180px] md:h-[180px] rounded-full bg-emerald-900 flex items-center justify-center">
              <FaArrowRightLong className="rotate-90 md:rotate-0 w-[4rem] h-[4rem] md:w-[8rem] md:h-[8rem] text-emerald-300" />
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-2 md:grid-cols-4 w-full place-items-center gap-4">
          <span className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] flex items-center justify-center bg-emerald-300 rounded-full">
            <img
              src="./car-1.svg"
              alt="car"
              className="w-[100] h-[100px] md:w-[120px] md:h-[120px] rotate-12"
            />
          </span>
          <span className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] flex items-center justify-center bg-emerald-300 rounded-full">
            <img
              src="./bus-1.svg"
              alt="car"
              className="w-[100] h-[100px] md:w-[120px] md:h-[120px] rotate-12"
            />
          </span>
          <span className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] flex items-center justify-center bg-emerald-300 rounded-full">
            <img
              src="./tren-1.svg"
              alt="car"
              className="w-[100] h-[100px] md:w-[120px] md:h-[120px] rotate-12"
            />
          </span>
          <span className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] flex items-center justify-center bg-emerald-300 rounded-full">
            <img
              src="./plane.svg"
              alt="car"
              className="w-[100] h-[100px] md:w-[120px] md:h-[120px] rotate-12"
            />
          </span>
        </div>
      </div>
      <div className="p-4 flex items-center flex-col md:flex-row gap-4 w-full md:w-3/4 border-t mt-16">
        <div className="w-full h-full flex items-center gap-2 ">
          <div className="flex items-center justify-center w-[100px] h-[100px] bg-slate-100 rounded-full">
            <CiLock size="3rem" className="text-slate-600" />
          </div>
          <p className="text-sm w-1/2">
            Rest assured, we guarantee precision in providing information about
            your travels.
          </p>
        </div>
        <div className="w-full h-full flex items-center gap-2 ">
          <div className="flex items-center justify-center w-[100px] h-[100px] bg-slate-100 rounded-full">
            <IoMdKey size="3rem" className="text-slate-600" />
          </div>
          <p className="text-sm w-1/2">
            Your information is safe and secure with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export const AnotherSection = () => {
  return (
    <div className="overflow-hidden relative md:px-8 d:px-16 w-full h-full bg-emerald-300 flex flex-col justify-between ">
      <img
        src="./quote.svg"
        alt="quote"
        className=" absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] -top-24 right-0 blur-sm"
      />
      <h1 className="py-16 text-slate-950 text-4xl md:text-6xl lg:text-8xl font-bold z-10 text-center md:text-left">
        Crafted with Precision Using Google APIs
      </h1>
      <div className="overflow-hidden flex flex-col-reverse md:flex-row justify-between z-10">
        <span className="w-full md:w-1/2 flex justify-center items-end">
          <img
            src="./google.svg"
            alt="google"
            className="hidden md:inline w-[200px] md:w-[400px] h-[200px] md:h-[400px] rotate-[-20deg]"
          />
        </span>
        <div className="w-full md:w-1/2 text-center md:text-justify">
          <h1 className="">
            Elevate your experience with TravelWander by seamlessly integrating
            the robust capabilities of Google Maps, Directions, Weather, and
            Destination APIs. Our platform harnesses the advanced features of
            these APIs to provide you with a comprehensive and dynamic travel
            planning experience.
          </h1>
          <span className="flex flex-wrap items-center justify-center md:justify-start gap-2 my-8">
            <button
              type="button"
              className="text-emerald-300 bg-emerald-900 px-8 py-1 rounded-full"
            >
              Explore now
            </button>
            <button
              type="button"
              className="text-emerald-900 bg-emerald-300 border-emerald-900 border px-8 py-1 rounded-full"
            >
              Learn more
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};
