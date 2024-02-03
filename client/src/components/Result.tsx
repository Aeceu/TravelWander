import { WeatherData } from "../types";

type ResultProps = {
  distance: string;
  duration: string;
  startWeather: WeatherData | null;
  endWeather: WeatherData | null;
  startAddress: string;
  endAddress: string;
};
const Result: React.FC<ResultProps> = ({
  distance,
  duration,
  endWeather,
  startWeather,
  endAddress,
  startAddress,
}) => {
  return (
    <>
      <h1 className="text-center m-2 text-emerald-500 font-bold">
        Travel Time 🚗
      </h1>
      <div className="grid grid-cols-1  lg:grid-cols-2 px-4 pb-4 gap-2 border-b">
        <span className="w-full flex flex-col items-center border px-2 py-4  shadow-md rounded-md hover:scale-110 duration-300 transition-all hover:border-emerald-400 cursor-pointer">
          <h1 className="text-sm font-semibold">{distance}</h1>
          <p className=" text-sm text-emerald-500 rounded-b-sm font-bold">
            Distance
          </p>
        </span>
        <span className="w-full flex flex-col items-center border px-2 py-4 shadow-md rounded-md hover:scale-110 duration-300 transition-all hover:border-emerald-400 cursor-pointer ">
          <h1 className=" text-sm font-semibold"> {duration} </h1>
          <p className=" text-sm text-emerald-500 rounded-b-sm font-bold  ">
            Duration
          </p>
        </span>
      </div>

      <h1 className="text-center m-2 text-emerald-500 font-bold ">
        Travel Weather ☁️
      </h1>

      {startWeather && endWeather && (
        <div className="grid grid-cols-1  lg:grid-cols-2 px-4 pb-4 gap-2 border-b">
          <span className="w-full flex flex-col items-center border px-2 py-4  shadow-md rounded-md hover:scale-110 duration-300 transition-all hover:border-emerald-400 cursor-pointer">
            <img
              src={startWeather?.current.condition.icon}
              alt="ic"
              className="w-[50px] h-[50px]"
            />
            <p className=" text-sm text-emerald-500 rounded-b-sm font-bold">
              {startAddress}
            </p>
          </span>
          <span className="w-full flex flex-col items-center border px-2 py-4 shadow-md rounded-md hover:scale-110 duration-300 transition-all hover:border-emerald-400 cursor-pointer">
            <img
              src={endWeather?.current.condition.icon}
              alt="ic"
              className="w-[50px] h-[50px]"
            />
            <p className=" text-sm text-emerald-500 rounded-b-sm font-bold">
              {endAddress}
            </p>
          </span>
        </div>
      )}
    </>
  );
};
export default Result;
