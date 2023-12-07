import { Link } from "react-router-dom";
import { useLogOut } from "../hooks/useLogOut";
import { LuAlignJustify, LuX } from "react-icons/lu";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

export const NavBar = () => {
  const [show, setShow] = useState(false);
  const logout = useLogOut();
  const mainControls = useAnimation();

  const HandleOpen = () => {
    setShow(true);
    mainControls.start("visible");
  };

  const HandleClose = () => {
    setShow(false);
    mainControls.start("hidden");
  };

  return (
    <nav className="w-full h-[70px] px-8 md:px-16  flex items-center justify-between ">
      <h1 className="text-2xl font-bold flex  items-center   cursive ">
        Travel
        <span className="text-yellow-500 flex items-center gap-1 ">
          Wander{" "}
        </span>
      </h1>
      <span className="hidden md:flex items-center gap-8 text-slate-950">
        <Link to="/">Home</Link>
        <Link to="/">Map</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
      </span>
      <button
        onClick={logout}
        type="button"
        className="hidden md:flex rounded-full px-8 py-1 shadow-lg bg-yellow-500 cursor-pointer hover:scale-105 transition-all duration-300 text-white"
      >
        Log out
      </button>

      <div className="relative flex md:hidden">
        {!show && (
          <LuAlignJustify
            onClick={HandleOpen}
            size="1.5rem"
            className="text-yellow-500 cursor-pointer hover:scale-110 transition-all duration-200"
          />
        )}
        <motion.div
          variants={{
            hidden: {
              scale: 0,
              height: "0",
              width: "0",
              borderRadius: "9999px",
              transition: { duration: 0.3 },
            },
            visible: {
              scale: 1,
              height: "100%",
              width: "100%",
              borderRadius: "0",
              transition: { duration: 0.3 },
            },
          }}
          initial="hidden"
          animate={mainControls}
          className={`fixed top-0 right-0 rounded-none bg-yellow-500 text-white flex flex-col gap-4 items-center justify-center`}
        >
          <LuX
            onClick={HandleClose}
            size="1.5rem"
            className="text-white cursor-pointer hover:scale-110 transition-all duration-200"
          />
          <Link onClick={HandleClose} to="/">
            Home
          </Link>
          <Link onClick={HandleClose} to="/map">
            Map
          </Link>
          <Link onClick={HandleClose} to="/about">
            About
          </Link>
          <Link onClick={HandleClose} to="/contact">
            Contact
          </Link>
          <Link onClick={HandleClose} to="/profile/123">
            Profile
          </Link>
          <button
            onClick={logout}
            type="button"
            className="flex rounded-full px-8 py-1 shadow-lg bg-white cursor-pointer hover:scale-105 transition-all duration-300 text-amber-500"
          >
            Log out
          </button>
        </motion.div>
      </div>
    </nav>
  );
};
