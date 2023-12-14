import { CiLock } from "react-icons/ci";
import { IoMdKey } from "react-icons/io";
import RotateOnScroll from "../animation/RotateOnScroll";
import { FaArrowRightLong } from "react-icons/fa6";
import TransformOnScroll from "../animation/TransformOnScroll";
import { cars } from "../../constant/cars";

export const CarSection = () => {
  return (
    <div className="overflow-hidden w-full h-full py-16  flex flex-col items-center">
      <h1 className="p-4 text-2xl md:text-4xl text-emerald-900 font-bold py-8 text-center">
        Discover the vehicles that suit you perfectly!
      </h1>

      <div className=" w-full flex items-center gap-2 flex-col md:flex-row ">
        <TransformOnScroll className="w-full md:w-1/4 flex  items-center ">
          <div className="shadow-xl  hidden md:flex p-2 bg-emerald-300 w-full h-[100px]  md:w-[500px] md:h-[200px] rounded-r-full  items-center justify-end">
            <div className="w-[80px] h-[80px] md:w-[180px] md:h-[180px] rounded-full bg-emerald-900 flex items-center justify-center">
              <FaArrowRightLong className="rotate-90 md:rotate-0 w-[4rem] h-[4rem] md:w-[8rem] md:h-[8rem] text-emerald-300" />
            </div>
          </div>
        </TransformOnScroll>

        <div className=" grid grid-cols-2 md:grid-cols-4 w-full place-items-center gap-4">
          {cars.map((car, i) => (
            <RotateOnScroll
              key={i}
              className=" w-[150px] h-[150px] md:w-[200px] md:h-[200px] flex items-center justify-center bg-emerald-300 rounded-full shadow-xl"
            >
              <img
                src={car.svg}
                alt={car.alt}
                className="w-[100] h-[100px] md:w-[120px] md:h-[120px] "
              />
            </RotateOnScroll>
          ))}
        </div>
      </div>
      <div className="p-4 flex items-center flex-col md:flex-row gap-4 w-full md:w-3/4 border-t mt-16">
        <div className="w-full h-full flex items-center gap-2 ">
          <div className="flex items-center justify-center w-[100px] h-[100px] bg-slate-100 rounded-full">
            <CiLock size="3rem" className="text-slate-600" />
          </div>
          <p className="text-sm w-1/2">
            Rest assured, we guarantee precision in providing information
            aboutSection your travels.
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
