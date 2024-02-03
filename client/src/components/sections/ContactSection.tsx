import { useEffect, useRef } from "react";
import { LuFacebook, LuMail, LuTwitter } from "react-icons/lu";
import NavStore from "../../state/NavStore";

export const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const setContactRef = NavStore((state) => state.setContactRef);

  useEffect(() => {
    if (ref) {
      setContactRef(ref);
    }
  }, [setContactRef]);

  return (
    <div
      ref={ref}
      className="w-full h-full bg-emerald-900  p-4 md:px-8 flex flex-col items-center "
    >
      <div ref={ref} className="w-full  h-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-4 text-white">
          <h1 className="w-full bold text-6xl  font-bold text-center md:text-left">
            Connect with Us
          </h1>
          <p className="w-full text-center md:text-justify">
            We're here to assist you on your journey. Whether you have
            questions, feedback, or just want to share your travel experiences,
            our team at TravelWander is ready to connect. Reach out to us for
            personalized support and seamless travel assistance.
          </p>
          <div className="w-full flex flex-wrap items-center justify-center md:justify-start gap-2 py-8">
            <span className="px-8 py-1 bg-emerald-500  rounded-full">
              Connect with us on:
            </span>
            <LuFacebook
              size="2.5rem"
              className="bg-emerald-500 p-2 rounded-full shadow-xl "
            />
            <LuTwitter
              size="2.5rem"
              className="bg-emerald-500 p-2 rounded-full shadow-xl "
            />
            <LuMail
              size="2.5rem"
              className="bg-emerald-500 p-2 rounded-full shadow-xl "
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center">
          <form className="w-full md:p-8 flex flex-col gap-2 text-white">
            <input
              type="text"
              placeholder="your email here...."
              className="bg-inherit px-4 py-1 border-2 border-emerald-500 outline-none"
            />
            <textarea
              placeholder="your message here...."
              cols={1}
              rows={10}
              className="w-full bg-inherit px-4 py-1 border-2 border-emerald-500 resize-none outline-none"
            />
            <button type="submit" className="px-8 py-1 bg-emerald-500 ">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* FOOTER */}
      <div className="border-t border-emerald-500 w-full">
        <footer className=" text-white md:p-8">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold text-center md:text-left">
                TravelWander
              </h2>
              <p className="text-sm">Your Companion in Seamless Exploration</p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a href="/about" className="text-sm">
                About Us
              </a>
              <a href="/contact" className="text-sm">
                Contact
              </a>
              <a href="/faq" className="text-sm">
                FAQs
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#" className="text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
