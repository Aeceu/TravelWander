import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" h-[calc(100vh-70px-30px)] w-full flex justify-around items-center p-8">
      <div className="w-full md:w-[65%] h-full flex flex-col  justify-center  items-start md:p-8 gap-4">
        <p className="font-bold text-yellow-500  text-sm ">
          Tailored Travel Experiences for Every Explorer
        </p>
        <span className="text-5xl md:text-6xl text-yellow-600 font-semibold flex flex-col">
          <h1 className="  ">Stay Curious,</h1>
          <h1 className=" ">Travel Furious.</h1>
        </span>
        <p className="text-black/60 w-full text-sm md:text-base">
          Embark on a journey fueled by curiosity and passion.{" "}
          <i className="text-yellow-600 font-bold ">TravelWander </i>
          invites you to explore with intensity, embracing the thrill of every
          adventure with unstoppable wanderlust.
        </p>
        <span className="flex items-center gap-2 py-8 ">
          <Link
            to="/map"
            className="rounded-full px-8 py-1 shadow-lg bg-yellow-500 text-white"
          >
            Start Exploring
          </Link>
          <Link
            to="/about"
            className="pt-1 flex items-center gap-2 text-yellow-500 "
          >
            or learn more <FaArrowRightLong />
          </Link>
        </span>
      </div>
      <div className="w-[35%] h-full hidden md:flex items-center justify-center">
        <img
          src="./travel_bg_1.jpg"
          alt="path"
          className="w-[500px] rounded-xl  object-cover object-center animate-moving"
        />
      </div>
    </div>
  );
};

export default Home;
