import { ChangeEvent, FormEvent, useState } from "react";
import { LoginErrorHandler } from "../handler/ErrorHandler";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { LuLoader2 } from "react-icons/lu";
import { axiosPrivate } from "../api/axios";
import { AuthStore } from "../state/AuthStore";
import { AxiosError, isAxiosError } from "axios";
import { FaLongArrowAltRight } from "react-icons/fa";

const LoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const setUser = AuthStore((state) => state.setUser);
  const setToken = AuthStore((state) => state.setToken);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  LoginErrorHandler({ data, setError });

  const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const HandleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axiosPrivate.post(
        "/login",
        {
          email: data.email,
          password: data.password,
        },
        { withCredentials: true }
      );

      setUser(res.data.user);
      setToken(res.data.accessToken);
      console.log(res.data);
      navigate("/");
    } catch (error) {
      if (isAxiosError(error)) {
        const err = error as AxiosError;
        console.log(err.response?.data);
        if (typeof err.response?.data === "string") {
          setError(err.response.data);
        }
      }
    } finally {
      setLoading(false);
      setData({ ...data, email: "", password: "" });
    }
  };

  return (
    <div className="bg-[url(./travel_1_desktop.png)] bg-center bg-cover sm:bg-none bg-[#FFFEF2] w-screen md:w-1/2 lg:w-[40%] flex items-center justify-center">
      <form
        onSubmit={HandleSubmit}
        className="relative w-[300px] flex flex-col items-center  gap-2 bg-[#FFFEF2] rounded-md px-4 py-8 shadow-xl md:shadow-none"
      >
        <h1 className="text-5xl flex items-center cursive gap-2 mb-4 font-bold">
          Travel
          <span className="text-amber-500 flex items-center gap-1">Wander</span>
        </h1>
        <p className="text-red-500 text-xs">{error}</p>
        <span className="flex items-center gap-2 w-full rounded-md bg-slate-50  shadow-xl px-4 py-3">
          <FaUser />
          <input
            value={data.email}
            type="text"
            placeholder="email"
            id="email"
            onChange={(e) => HandleChange(e)}
            className="w-full outline-none bg-inherit"
          />
        </span>
        <span className="flex items-center gap-2 w-full rounded-md bg-slate-50  shadow-xl px-4 py-3">
          <FaLock />
          <input
            value={data.password}
            type={show ? "text" : "password"}
            placeholder="password"
            id="password"
            onChange={(e) => HandleChange(e)}
            className="w-full outline-none bg-inherit"
          />
          {show ? (
            <FaEyeSlash
              size="1.3rem"
              className="cursor-pointer"
              onClick={() => setShow(false)}
            />
          ) : (
            <FaEye
              size="1.3rem"
              className="cursor-pointer"
              onClick={() => setShow(true)}
            />
          )}
        </span>
        <h1 className="text-xs flex items-center gap-2">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-bold text-amber-500 flex items-center gap-1 my-2 hover:underline"
          >
            Sign up here <FaLongArrowAltRight />
          </Link>
        </h1>
        <button
          disabled={show}
          type="submit"
          className="bg-slate-950 text-white rounded-sm w-full flex justify-center items-center px-4 py-3 shadow-amber-md "
        >
          {loading ? (
            <LuLoader2 size="1.5rem" className="animate-spin " />
          ) : (
            "Log in"
          )}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
