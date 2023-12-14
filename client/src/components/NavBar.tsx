import { useLogOut } from "../hooks/useLogOut";
import { LuAlignJustify, LuX } from "react-icons/lu";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { NavLinks } from "./NavLinks";
import { MobileNavLinks } from "./MobileNavLinks";

export const NavBar = () => {
  const logout = useLogOut();
  return (
    <nav className="w-full h-[70px] px-8 md:px-16  flex items-center justify-between ">
      <h1 className="text-2xl font-bold flex  items-center   cursive ">
        Travel
        <span className="text-emerald-500 flex items-center gap-1 ">
          Wander{" "}
        </span>
      </h1>
      <NavLinks />

      <button
        onClick={logout}
        type="button"
        className="hidden md:flex rounded-full px-8 py-1 shadow-lg  cursor-pointer hover:scale-105 transition-all duration-300 bg-emerald-300 text-emerald-900"
      >
        Log out
      </button>

      <MobileNav />
    </nav>
  );
};

export const MobileNav = () => {
  const logout = useLogOut();
  const mainControls = useAnimation();
  const [show, setShow] = useState(false);

  const HandleOpen = () => {
    setShow(true);
    mainControls.start("visible");
  };

  const HandleClose = () => {
    setShow(false);
    mainControls.start("hidden");
  };
  return (
    <div className="relative flex md:hidden">
      {!show && (
        <LuAlignJustify
          onClick={HandleOpen}
          size="1.5rem"
          className="text-emerald-900 cursor-pointer hover:scale-110 transition-all duration-200"
        />
      )}
      <motion.div
        variants={{
          hidden: {
            transformOrigin: "top",
            opacity: 0,
            scale: 0,
            height: "0",
            width: "0",
            transition: { duration: 0.3 },
          },
          visible: {
            opacity: 1,
            scale: 1,
            height: "100%",
            width: "100%",
            transition: { duration: 0.3 },
          },
        }}
        initial="hidden"
        animate={mainControls}
        className={`z-50 origin-top fixed top-0 right-0  bg-emerald-300 text-emerald-900 flex flex-col gap-4 items-center justify-center`}
      >
        <LuX
          onClick={HandleClose}
          size="1.5rem"
          className="text-emerald-900 cursor-pointer hover:scale-110 transition-all duration-200"
        />
        <MobileNavLinks />
        <button
          onClick={logout}
          type="button"
          className="flex rounded-full px-8 py-1 shadow-lg  cursor-pointer hover:scale-105 transition-all duration-300 border border-emerald-900 text-emerald-900"
        >
          Log out
        </button>
      </motion.div>
    </div>
  );
};
