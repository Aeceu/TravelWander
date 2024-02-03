import { useEffect, useRef, useState } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Autocomplete,
  DirectionsRenderer,
  Marker,
  Libraries,
} from "@react-google-maps/api";
import { LuLoader2, LuLocateFixed } from "react-icons/lu";
import { NavBar } from "../components/NavBar";
import { getWeather } from "../api/getWeather";
import { WeatherData } from "../types";
import Result from "../components/Result";
import MapRoutes from "../components/MapRoutes";
import MobleMapSideBar from "../components/MobleMapSideBar";

const libraries: Libraries = ["places"];
const App = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    libraries: libraries,
  });
  const [show, setShow] = useState(false);

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [directionsResponse, setDirectionsResponse] =
    useState<google.maps.DirectionsResult | null>(null);

  const [distance, setDistance] = useState<string>("");
  const [duration, setDuration] = useState<string>("");

  const [coords, setCoords] = useState({ lat: 0, lng: 0 });
  const originRef = useRef<HTMLInputElement>(null);
  const destinationRef = useRef<HTMLInputElement>(null);
  const mobile_originRef = useRef<HTMLInputElement>(null);
  const mobile_destinationRef = useRef<HTMLInputElement>(null);

  const [routeIndex, setRouteIndex] = useState(0);
  const [startWeather, setStartWeather] = useState<WeatherData | null>(null);
  const [endWeather, setEndWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

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

  const setRoute = (index: number) => {
    if (directionsResponse) {
      setRouteIndex(index);
      setDistance(
        directionsResponse.routes[index].legs[0].distance?.text || ""
      );
      setDuration(
        directionsResponse.routes[index].legs[0].duration?.text || ""
      );
    }
  };

  if (!isLoaded) {
    return <LuLoader2 className="animate-spint w-5" />;
  }

  return (
    <div className="flex flex-col h-screen w-full">
      <NavBar />
      <div className="flex  h-full w-full  items-center ">
        <div className="hidden md:flex w-1/4 h-[calc(100vh-60px)] overflow-y-auto flex-col justify-start ">
          <div className="bg-emerald-400 h-[50px] shadow-md w-full flex items-center justify-center">
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

          {directionsResponse && (
            <Result
              distance={distance}
              duration={duration}
              endWeather={endWeather}
              startWeather={startWeather}
              startAddress={
                directionsResponse.routes[
                  routeIndex
                ].legs[0].start_address.split(",")[1]
              }
              endAddress={
                directionsResponse.routes[routeIndex].legs[0].end_address.split(
                  ","
                )[1]
              }
            />
          )}
        </div>

        <div className="relative w-full md:w-3/4 h-full">
          <GoogleMap
            center={coords}
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
            <Marker position={coords} />
            {directionsResponse && (
              <DirectionsRenderer
                directions={directionsResponse}
                routeIndex={routeIndex}
                options={{
                  draggable: true,
                }}
              />
            )}
            {directionsResponse && (
              <MapRoutes
                directionsResponse={directionsResponse}
                routeIndex={routeIndex}
                setRoute={setRoute}
              />
            )}
          </GoogleMap>
        </div>

        <MobleMapSideBar
          distance={distance}
          duration={duration}
          endWeather={endWeather}
          startWeather={startWeather}
          directionsResponse={directionsResponse}
          coords={coords}
          destinationRef={mobile_destinationRef}
          originRef={mobile_originRef}
          map={map}
          routeIndex={routeIndex}
          show={show}
          setShow={setShow}
          setDirectionsResponse={setDirectionsResponse}
          setDistance={setDistance}
          setDuration={setDuration}
          setEndWeather={setEndWeather}
          setStartWeather={setStartWeather}
        />
      </div>
    </div>
  );
};

export default App;
