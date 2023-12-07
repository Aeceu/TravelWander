import {
  FaSquareFacebook,
  FaSquareGithub,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function AuthInfo() {
  return (
    <div
      className="hidden sm:flex  md:w-[60%] h-full bg-[url(./travel_1_desktop.png)] bg-cover bg-center
        py-2 pr-2  flex-col items-center justify-evenly gap-8"
    >
      <motion.img
        initial={{ y: "-100%", rotate: 90 }}
        animate={{ y: 0, rotate: 90, transition: { delay: 0.5 } }}
        src="./pngegg.png"
        alt="bookmark"
        className="absolute h-[200px] -top-36"
      />

      <motion.div
        initial={{ y: "-200%" }}
        animate={{ y: 0, transition: { delay: 0.3 } }}
        className="w-max relative bg-[#FFFEF2] shadow-amber-md rounded-md p-2"
      >
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: "100%", transition: { delay: 0.8 } }}
          src="./bookmark.svg"
          alt="bookmark"
          className="w-[70px] absolute -bottom-12 -left-12"
        />
        <h1 className="text-5xl md:text-6xl lg:text-8xl flex  items-center  cursive md:gap-2 pl-6">
          Travel
          <span className="text-amber-500 flex items-center gap-1 ">
            Wander{" "}
          </span>
        </h1>
        <p className="p-2 text-xs lg:text-base text-center">
          Roaming Beyond Boundaries, One Adventure at a Time.
        </p>
      </motion.div>
      <MoreInfo />
    </div>
  );
}

const MoreInfo = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: "100%", transition: { delay: 0.5 } }}
      className="w-max relative bg-[#FFFEF2] shadow-amber-md rounded-md p-4"
    >
      <div className=" p-2 flex flex-col gap-2 text-xs lg:text-base">
        <div className="w-full md:w-52 flex flex-col gap-1 md:items-start items-center">
          <Link
            to="/signup"
            className="w-full flex items-center justify-center gap-2  bg-amber-500 rounded-sm shadow-slate-sm text-white px-4 py-2 hover:scale-105 transition-all duration-100"
          >
            create an account
            <FaLongArrowAltRight />
          </Link>
          <div className="w-full flex items-center gap-2 ">
            <div className="w-1/2 h-[1px] border-b border-slate-950/50" />
            or
            <div className="w-1/2 h-[1px] border-b border-slate-950/50" />
          </div>
          <Link
            to="/login"
            className="w-full flex items-center justify-center gap-2  bg-amber-500 rounded-sm shadow-slate-sm text-white px-4 py-2 hover:scale-105 transition-all duration-100"
          >
            login my account
            <FaLongArrowAltRight />
          </Link>
        </div>
      </div>
      <div className="p-2 text-center">
        <p>Support my Socials:</p>
        <span className="flex items-center gap-2 justify-center ">
          <Link to="/">
            <FaSquareFacebook size="1.5rem" className="text-slate-950" />
          </Link>
          <Link to="/">
            <FaSquareXTwitter size="1.5rem" className="text-slate-950" />
          </Link>
          <Link to="/">
            <FaSquareGithub size="1.5rem" className="text-slate-950" />
          </Link>
        </span>
      </div>
    </motion.div>
  );
};
