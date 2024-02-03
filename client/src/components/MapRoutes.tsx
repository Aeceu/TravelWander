import React, { useState } from "react";
import { LuX } from "react-icons/lu";

type MapRoutesProps = {
  setRoute: (id: number) => void;
  routeIndex: number;
  directionsResponse: google.maps.DirectionsResult;
};
const MapRoutes: React.FC<MapRoutesProps> = ({
  directionsResponse,
  routeIndex,
  setRoute,
}) => {
  const [show, setShow] = useState(false);
  const originAdd = directionsResponse.routes[routeIndex].legs[0].start_address;
  const destinationAdd =
    directionsResponse.routes[routeIndex].legs[0].end_address;

  const modifiedOriginAdd = originAdd
    .split(",")
    .map((part, index) =>
      index === 0 ? part.split(" ").slice(1).join(" ") : part.trim()
    )
    .join(", ")
    .slice(1);

  const modifiedDestinationAdd = destinationAdd
    .split(",")
    .map((part, index) =>
      index === 0 ? part.split(" ").slice(1).join(" ") : part.trim()
    )
    .join(",")
    .slice(1);

  return (
    <div
      className={`${
        show ? "p-4" : "p-2 hover:scale-105"
      } rounded-md absolute top-4 right-4 bg-white text-slate-950 shadow-xl border flex flex-col gap-2 z-40 transition-all duration-300`}
    >
      <span className="flex justify-end">
        {show ? (
          <LuX className="cursor-pointer" onClick={() => setShow(!show)} />
        ) : (
          <h1
            className="text-xs cursor-pointer "
            onClick={() => setShow(!show)}
          >
            View Routes
          </h1>
        )}
      </span>
      {show && (
        <div className="w-full flex flex-col gap-2">
          <div className="flex flex-col ">
            <span className="flex items-center gap-1">
              <p className="text-emerald-500 font-bold text-xs ">FROM:</p>
              <h1 className="text-[10px] md:text-[12px]">
                {modifiedOriginAdd}
              </h1>
            </span>
            <span className="flex items-center gap-1">
              <p className="text-blue-500 font-bold text-xs">TO:</p>
              <h1 className="text-[10px] md:text-[12px]">
                {modifiedDestinationAdd}
              </h1>
            </span>
          </div>
          <p className="text-[10px] w-full border-t pt-2">Routes:</p>
          {directionsResponse.routes.map((routes, i) => (
            <li
              onClick={() => setRoute(i)}
              key={i}
              className={`text-[10px] cursor-pointer hover:underline ${
                routeIndex === i && "text-blue-500"
              }`}
            >
              {routes.summary}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};
export default MapRoutes;
