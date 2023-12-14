import { MdOutlineSecurity } from "react-icons/md";
import { IoMdKey } from "react-icons/io";

export const GoogleSection = () => {
  return (
    <div className="overflow-hidden relative md:px-8 d:px-16 w-full h-full bg-emerald-300 flex flex-col justify-between ">
      <img
        src="./quote.svg"
        alt="quote"
        className=" absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] -top-24 right-0 blur-sm"
      />
      <h1 className="py-16 text-slate-950 text-4xl md:text-6xl lg:text-8xl font-bold z-10 text-center md:text-left">
        Crafted with Precision Using Google APIs
      </h1>
      <div className="overflow-hidden flex flex-col-reverse md:flex-row justify-between z-10">
        <span className="w-full md:w-1/2 flex justify-center items-end">
          <img
            src="./google.svg"
            alt="google"
            className="hidden md:inline w-[200px] md:w-[400px] h-[200px] md:h-[400px] rotate-[-20deg]"
          />
        </span>
        <div className="w-full md:w-1/2 text-center md:text-justify">
          <h1 className="">
            Elevate your experience with TravelWander by seamlessly integrating
            the robust capabilities of Google Maps, Directions, Weather, and
            Destination APIs. Our platform harnesses the advanced features of
            these APIs to provide you with a comprehensive and dynamic travel
            planning experience.
          </h1>
          <span className="flex flex-wrap items-center justify-center md:justify-start gap-2 my-8">
            <button
              type="button"
              className="text-emerald-300 bg-emerald-900 px-8 py-1 rounded-full"
            >
              Explore now
            </button>
            <button
              type="button"
              className="text-emerald-900 bg-emerald-300 border-emerald-900 border px-8 py-1 rounded-full"
            >
              Learn more
            </button>
          </span>
          <div className="py-4 flex items-center flex-col md:flex-row gap-4 w-full  border-t border-emerald-900 mt-16">
            <div className="w-full h-full flex items-center gap-2 ">
              <div className="flex items-center justify-center w-[100px] h-[70px] bg-emerald-900 rounded-full">
                <MdOutlineSecurity
                  size="3rem"
                  className="w-full text-emerald-500"
                />
              </div>
              <p className="text-sm w-full">
                Rest assured, we prioritize the security of your information,
                including robust protection for your Google API key and other
                Google-related data.
              </p>
            </div>
            <div className="w-full h-full flex items-center gap-2 ">
              <div className="flex items-center justify-center w-[100px] h-[70px] bg-emerald-900 rounded-full">
                <IoMdKey size="3rem" className="text-emerald-500 w-full" />
              </div>
              <p className="text-sm w-full">
                Your data integrity is our commitment – TravelWander ensures the
                safeguarding of your information throughout your seamless travel
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
