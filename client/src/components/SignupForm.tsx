import { LuLoader2 } from "react-icons/lu";
import { FaUser, FaLock, FaEyeSlash, FaEye } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";

import axios from "../api/axios";
import { AxiosError, isAxiosError } from "axios";
import { SignupErrorHandler } from "../handler/ErrorHandler";

export default function SignupForm() {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");
  const [show1, setShow1] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  SignupErrorHandler({ data, setError });

  const HandleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await axios.post("/signup", {
        email: data.email,
        password: data.password,
        firstname: data.firstname,
        lastname: data.lastname,
      });
      console.log(res.data);
      navigate("/login");
    } catch (error) {
      if (isAxiosError(error)) {
        const err = error as AxiosError;
        console.log(err.response?.data);
        if (typeof err.response?.data === "string") {
          setError(err.response?.data);
        }
      }
    } finally {
      setLoading(false);
      setData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      });
    }
  };

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  return (
    <div className="bg-[url(./travel_1_desktop.png)] bg-center bg-cover sm:bg-none bg-[#FFFEF2] w-screen md:w-1/2 lg:w-[40%] flex items-center justify-center">
      <form
        onSubmit={HandleSubmit}
        className="relative w-[300px] flex flex-col items-center  gap-2 bg-[#FFFEF2] rounded-md px-4 py-8 shadow-xl md:shadow-none"
      >
        <img
          src="./bookmark.svg"
          alt="bookmark"
          className="sm:hidden w-[70px] absolute -top-1 -left-10"
        />
        <h1 className="text-5xl flex items-center cursive gap-2 mb-4 font-bold">
          Travel
          <span className="text-emerald-900 flex items-center gap-1">
            Wander
          </span>
        </h1>
        <p className="text-red-500 text-xs">{error}</p>
        <span className="flex items-center gap-2 w-full rounded-md bg-slate-50  shadow-xl px-4 py-3">
          <FaUser />
          <input
            value={data.firstname}
            type="text"
            className="outline-none bg-inherit w-full"
            placeholder="firstname"
            id="firstname"
            onChange={(e) => handleChange(e)}
          />
        </span>
        <span className="flex items-center gap-2 w-full rounded-md bg-slate-50  shadow-xl px-4 py-3">
          <FaUser />
          <input
            value={data.lastname}
            type="text"
            className="outline-none bg-inherit w-full"
            placeholder="lastname"
            id="lastname"
            onChange={(e) => handleChange(e)}
          />
        </span>
        <span className="flex items-center gap-2 w-full rounded-md bg-slate-50  shadow-xl px-4 py-3">
          <FaUser />
          <input
            value={data.email}
            type="text"
            className="outline-none bg-inherit w-full"
            placeholder="email"
            id="email"
            onChange={(e) => handleChange(e)}
          />
        </span>
        <span className="flex items-center justify-between gap-2 w-full rounded-md bg-slate-50  shadow-xl px-4 py-3 ">
          <FaLock />
          <input
            value={data.password}
            type={show1 ? "text" : "password"}
            className="outline-none bg-inherit w-full"
            placeholder="password"
            id="password"
            onChange={(e) => handleChange(e)}
          />
          {show1 ? (
            <FaEyeSlash
              size="1.3rem"
              className="cursor-pointer"
              onClick={() => setShow1(false)}
            />
          ) : (
            <FaEye
              size="1.3rem"
              className="cursor-pointer"
              onClick={() => setShow1(true)}
            />
          )}
        </span>

        <h1 className="text-xs flex items-center gap-2">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-bold text-emerald-900 flex items-center gap-1 my-2 hover:underline"
          >
            Log in here <FaLongArrowAltRight />
          </Link>
        </h1>
        <button
          disabled={show1}
          type="submit"
          className="bg-slate-950 text-white rounded-sm w-full flex justify-center items-center px-4 py-3 shadow-emerald-md "
        >
          {loading ? (
            <LuLoader2 size="1.5rem" className="animate-spin " />
          ) : (
            "Sign up"
          )}
        </button>
      </form>
    </div>
  );
}
