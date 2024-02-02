import { useRef, useState } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Autocomplete,
  DirectionsRenderer,
  Marker,
} from "@react-google-maps/api";
import { LuLoader2, LuSend } from "react-icons/lu";
import { NavBar } from "../components/NavBar";
import { getWeather } from "../api/getWeather";
import { WeatherData } from "../types";

const center = { lat: 14.5764, lng: 121.0851 };
// const libraries: Libraries = ;

const App = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    libraries: ["places"],
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [directionsResponse, setDirectionsResponse] =
    useState<google.maps.DirectionsResult | null>(null);
  const [distance, setDistance] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const originRef = useRef<HTMLInputElement>(null);
  const destinationRef = useRef<HTMLInputElement>(null);

  const [startWeather, setStartWeather] = useState<WeatherData | null>(null);
  const [endWeather, setEndWeather] = useState<WeatherData | null>(null);

  const calculateRoute = async () => {
    if (originRef.current && destinationRef.current) {
      if (
        originRef.current.value === "" ||
        destinationRef.current.value === ""
      ) {
        return;
      }
    }

    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current!.value,
      destination: destinationRef.current!.value,
      travelMode: google.maps.TravelMode.DRIVING,
    });

    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance?.text || "");
    setDuration(results.routes[0].legs[0].duration?.text || "");

    const start_lat = results.routes[0].overview_path[0].lat();
    const start_lng = results.routes[0].overview_path[0].lng();

    const end_lat =
      results.routes[0].overview_path[
        results.routes[0].overview_path.length - 1
      ].lat();
    const end_lng =
      results.routes[0].overview_path[
        results.routes[0].overview_path.length - 1
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

  if (!isLoaded) {
    return <LuLoader2 className="animate-spint w-5" />;
  }
  return (
    <div className="flex flex-col h-screen w-full">
      <NavBar />
      <div className="flex  h-full w-full  items-center ">
        <div className="w-1/4 h-full flex flex-col bg-white ">
          <div className="bg-emerald-400 h-[50px] shadow-md w-full flex items-center justify-center">
            <h1 className="font-bold text-white">Set your destination</h1>
          </div>

          <div className="w-full flex flex-col p-4 gap-2">
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

            <div className="flex items-center justify-end gap-2">
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
              <LuSend
                aria-label="center back"
                onClick={() => {
                  map?.panTo(center);
                  map?.setZoom(15);
                }}
              />
            </div>

            <div className="w-full h-[1px] border-b mt-4" />
            <p className="text-sm font-bold text-emerald-500">Result</p>

            <div className="flex items-center justify-evenly">
              <span className="flex flex-col  items-center ">
                <h1 className=" text-lg font-semibold"> {distance} </h1>
                <p className=" text-sm text-emerald-500 rounded-b-sm  ">
                  Distance
                </p>
              </span>
              <span className="flex flex-col  items-center ">
                <h1 className=" text-lg font-semibold"> {duration} </h1>
                <p className=" text-sm text-emerald-500 rounded-b-sm  ">
                  Duration
                </p>
              </span>
            </div>

            {startWeather && (
              <div className="w-full flex flex-col  p-1 border">
                <h1 className="text-emerald-500 font-semibold text-sm">
                  Origin Weather
                </h1>
                <div className="flex items-center gap-2 p-2">
                  <img
                    src={startWeather?.current.condition.icon}
                    alt="ic"
                    className="w-[50px] h-[50px]"
                  />
                  <span className="flex items-center gap-2">
                    <p>{startWeather?.current.condition.text}</p>
                    <p>{startWeather?.current.temp_c}&deg;c </p>
                  </span>
                </div>
              </div>
            )}
            {endWeather && (
              <div className="w-full flex flex-col  p-1 border">
                <h1 className="text-emerald-500 font-semibold text-sm">
                  Destination Weather
                </h1>
                <div className="flex items-center gap-2 p-2">
                  <img
                    src={endWeather?.current.condition.icon}
                    alt="ic"
                    className="w-[50px] h-[50px]"
                  />
                  <span className="flex items-center gap-2">
                    <p>{endWeather?.current.condition.text}</p>
                    <p>{endWeather?.current.temp_c}&deg;c </p>
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="w-3/4 h-full">
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={(map) => setMap(map as google.maps.Map)}
          >
            <Marker position={center} />
            {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )}
          </GoogleMap>
        </div>
      </div>
    </div>
  );
};

export default App;
