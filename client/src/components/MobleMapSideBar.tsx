import { motion, useAnimation } from "framer-motion";
import { RefObject, SetStateAction, useEffect, useRef } from "react";
import { WeatherData } from "../types";
import Result from "./Result";
import { LuLocateFixed } from "react-icons/lu";
import { Autocomplete } from "@react-google-maps/api";
import { getWeather } from "../api/getWeather";

type MobleMapSideBarProps = {
  distance: string;
  duration: string;
  startWeather: WeatherData | null;
  endWeather: WeatherData | null;
  directionsResponse: google.maps.DirectionsResult | null;
  routeIndex: number;
  originRef: RefObject<HTMLInputElement>;
  destinationRef: RefObject<HTMLInputElement>;
  map: google.maps.Map | null;
  coords: { lat: number; lng: number };
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
  setStartWeather: React.Dispatch<SetStateAction<WeatherData | null>>;
  setEndWeather: React.Dispatch<SetStateAction<WeatherData | null>>;
  setDuration: React.Dispatch<SetStateAction<string>>;
  setDistance: React.Dispatch<SetStateAction<string>>;
  setDirectionsResponse: React.Dispatch<
    SetStateAction<google.maps.DirectionsResult | null>
  >;
};

const MobleMapSideBar: React.FC<MobleMapSideBarProps> = ({
  distance,
  duration,
  endWeather,
  startWeather,
  coords,
  destinationRef,
  map,
  originRef,
  directionsResponse,
  routeIndex,
  show,
  setShow,
  setDirectionsResponse,
  setDistance,
  setDuration,
  setEndWeather,
  setStartWeather,
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const mainControls = useAnimation();

  const showSection = () => {
    setShow(!show);
  };

  useEffect(() => {
    if (show) {
      mainControls.start("animate");
    } else {
      mainControls.start("initial");
    }
  }, [show]);

  const calculateRoute = async () => {
    if (originRef.current && destinationRef.current) {
      if (
        originRef.current?.value === "" &&
        destinationRef.current?.value === ""
      ) {
        return;
      }
    }

    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current!.value,
      destination: destinationRef.current!.value,
      travelMode: google.maps.TravelMode.DRIVING,
      provideRouteAlternatives: true,
    });

    setDirectionsResponse(results);
    setDistance(results.routes[routeIndex].legs[0].distance?.text || "");
    setDuration(results.routes[routeIndex].legs[0].duration?.text || "");

    const start_lat = results.routes[routeIndex].overview_path[0].lat();
    const start_lng = results.routes[routeIndex].overview_path[0].lng();

    const end_lat =
      results.routes[routeIndex].overview_path[
        results.routes[routeIndex].overview_path.length - 1
      ].lat();
    const end_lng =
      results.routes[routeIndex].overview_path[
        results.routes[routeIndex].overview_path.length - 1
      ].lng();

    await getWeather(start_lat, start_lng).then((res) => {
      setStartWeather(res);
    });
    await getWeather(end_lat, end_lng).then((res) => {
      setEndWeather(res);
    });
  };

  const clearRoute = () => {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    if (originRef.current) originRef.current.value = "";
    if (destinationRef.current) destinationRef.current.value = "";
  };

  return (
    <motion.div
      ref={divRef}
      variants={{
        initial: {
          height: "1rem",
        },
        animate: {
          height: "75%",
        },
      }}
      initial="initial"
      animate={mainControls}
      className={`md:hidden overflow-y-auto  absolute bottom-0 w-full h-4 bg-white rounded-t-lg shadow-xl flex flex-col items-center `}
    >
      <div className="relative bg-emerald-400 h-[50px] shadow-md w-full flex items-center justify-center">
        <div className="w-full flex justify-center absolute top-0">
          <div
            onClick={showSection}
            className="cursor-pointer hover:bg-slate-600 hover:scale-105 duration-300 transition-all mt-1 w-1/2 h-1 bg-slate-500 rounded-full"
          />
        </div>
        <h1 className="p-4 font-bold text-white">Set your destination</h1>
      </div>

      <div className="w-full flex flex-col p-4 border-b ">
        <div className="flex items-center gap-2 w-full">
          <Autocomplete className="w-full flex items-center gap-2">
            <input
              type="text"
              ref={originRef}
              placeholder="Enter the origin"
              className="outline-none w-full rounded-md border-2 border-emerald-500 text-xs px-1 py-2"
            />
          </Autocomplete>
        </div>
        <div className="w-full  flex items-center text-xs gap-2 p-2 ">
          <div className="w-full h-[1px] border-b" />
          to
          <div className="w-full h-[1px] border-b" />
        </div>
        <div className="flex items-center gap-2 w-full">
          <Autocomplete className="w-full flex items-center gap-2">
            <input
              type="text"
              placeholder="Enter the destination"
              ref={destinationRef}
              className="outline-none w-full rounded-md border-2 border-emerald-500  text-xs px-1 py-2"
            />
          </Autocomplete>
        </div>

        <div className="flex items-center justify-end gap-2 pt-2">
          <button
            type="submit"
            onClick={clearRoute}
            className="text-red-500  text-xs "
          >
            Clear
          </button>
          <button
            type="submit"
            onClick={calculateRoute}
            className="bg-emerald-500 text-white text-xs rounded-md px-3 py-1.5"
          >
            Calculate
          </button>
          <LuLocateFixed
            size="1.2rem"
            className="text-blue-500"
            aria-label="center back"
            onClick={() => {
              map?.panTo(coords);
              map?.setZoom(15);
            }}
          />
        </div>
      </div>
      <div className="w-full h-full p-2 ">
        {directionsResponse && (
          <Result
            distance={distance}
            duration={duration}
            endWeather={endWeather}
            startWeather={startWeather}
            startAddress={
              directionsResponse.routes[routeIndex].legs[0].start_address.split(
                ","
              )[1]
            }
            endAddress={
              directionsResponse.routes[routeIndex].legs[0].end_address.split(
                ","
              )[1]
            }
          />
        )}
      </div>
    </motion.div>
  );
};
export default MobleMapSideBar;
