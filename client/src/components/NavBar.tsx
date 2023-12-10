import { Link, useLocation } from "react-router-dom";
import { useLogOut } from "../hooks/useLogOut";
import { LuAlignJustify, LuX } from "react-icons/lu";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Links } from "../constant/links";
import { AuthStore } from "../state/AuthStore";

export const NavBar = () => {
  const path = useLocation();
  const logout = useLogOut();
  const mainControls = useAnimation();
  const [show, setShow] = useState(false);
  const token = AuthStore((state) => state.token);

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
        <span className="text-emerald-500 flex items-center gap-1 ">
          Wander{" "}
        </span>
      </h1>
      <span className="hidden md:flex items-center gap-8 text-slate-950">
        {Links.map((link, i) => (
          <Link
            to={link.path}
            key={i}
            className={`${
              path.pathname === link.path && " text-emerald-900 font-bold"
            } text-sm`}
          >
            {link.name}
          </Link>
        ))}
      </span>
      {!token ? (
        <div className="flex items-center gap-1">
          <Link
            to={"/login"}
            className="hidden md:flex rounded-full px-8 py-1   cursor-pointer hover:scale-105 transition-all duration-300 text-emerald-900"
          >
            Sign in
          </Link>
          <Link
            to={"/signup"}
            className="hidden md:flex rounded-full px-8 py-1 shadow-lg  cursor-pointer hover:scale-105 transition-all duration-300 border bg-emerald-300 text-emerald-900"
          >
            Sign up
          </Link>
        </div>
      ) : (
        <button
          onClick={logout}
          type="button"
          className="hidden md:flex rounded-full px-8 py-1 shadow-lg  cursor-pointer hover:scale-105 transition-all duration-300 bg-emerald-300 text-emerald-900"
        >
          Log out
        </button>
      )}

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
              opacity: 0,
              scale: 0,
              height: "0",
              width: "0",
              borderRadius: "9999px",
              transition: { duration: 0.3 },
            },
            visible: {
              opacity: 1,
              scale: 1,
              height: "100%",
              width: "100%",
              borderRadius: "0",
              transition: { duration: 0.3 },
            },
          }}
          initial="hidden"
          animate={mainControls}
          className={`fixed top-0 right-0 rounded-none bg-emerald-300 text-emerald-900 flex flex-col gap-4 items-center justify-center`}
        >
          <LuX
            onClick={HandleClose}
            size="1.5rem"
            className="text-emerald-900 cursor-pointer hover:scale-110 transition-all duration-200"
          />
          {Links.map((link, i) => (
            <Link to={link.path} key={i} onClick={HandleClose}>
              {link.name}
            </Link>
          ))}
          {!token ? (
            <div className="flex flex-col gap-2">
              <Link
                to={"/login"}
                className="flex rounded-full px-8 py-1 shadow-lg  cursor-pointer hover:scale-105 transition-all duration-300 border border-emerald-900 text-emerald-900"
              >
                Log in
              </Link>
              <Link
                to={"/login"}
                className="flex rounded-full px-8 py-1 shadow-lg  cursor-pointer hover:scale-105 transition-all duration-300 border border-emerald-900 text-emerald-900"
              >
                Sign up
              </Link>
            </div>
          ) : (
            <button
              onClick={logout}
              type="button"
              className="flex rounded-full px-8 py-1 shadow-lg  cursor-pointer hover:scale-105 transition-all duration-300 border border-emerald-900 text-emerald-900"
            >
              Log out
            </button>
          )}
        </motion.div>
      </div>
    </nav>
  );
};
