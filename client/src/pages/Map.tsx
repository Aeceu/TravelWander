import { useRef, useState } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { LuLoader2, LuSend } from "react-icons/lu";
import { NavBar } from "../components/NavBar";

const center = { lat: 14.5764, lng: 121.0851 };

const App = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCklK561q6X07wy8Sok0nJCZDPtMBTfgNU",
    libraries: ["places"],
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [directionsResponse, setDirectionsResponse] =
    useState<google.maps.DirectionsResult | null>(null);
  const [distance, setDistance] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const originRef = useRef<HTMLInputElement>(null);
  const destinationRef = useRef<HTMLInputElement>(null);

  if (!isLoaded) {
    return <LuLoader2 className="animate-spint w-5" />;
  }

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
  };

  const clearRoute = () => {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    if (originRef.current) originRef.current.value = "";
    if (destinationRef.current) destinationRef.current.value = "";
  };

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
            </div>

            <div className="w-full h-[1px] border-b mt-4" />
            <p className="text-sm font-bold text-emerald-500">Result</p>

            <div>
              <h1>Distance: {distance} </h1>
              <h1>Duration: {duration} </h1>
              <LuSend
                aria-label="center back"
                onClick={() => {
                  map?.panTo(center);
                  map?.setZoom(15);
                }}
              />
            </div>
          </div>
        </div>

        <div className="w-3/4 h-full">
          {/* Google Map Box */}
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
