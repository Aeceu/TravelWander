import { FaMessage, FaUser } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className="h-[calc(100vh-70px-30px)] flex  justify-center items-center">
      <form className="shadow-2xl h-full w-[500px] md:w-[500px] flex flex-col gap-4 items-center justify-center p-2 md:p-4 lg:p-8 rounded-sm bg-amber-100 text-sm  ">
        <h1 className="text-4xl font-bold flex  items-center   cursive ">
          Contact
          <span className="text-yellow-500 flex items-center gap-1 ">Us </span>
        </h1>
        <span className="flex items-center gap-2 w-full rounded-md bg-slate-50  shadow-xl px-4 py-3">
          <FaUser />
          <input
            type="text"
            placeholder="your email here ...."
            className="w-full outline-none bg-inherit"
          />
        </span>
        <span className="flex items-start gap-2 w-full rounded-md bg-slate-50  shadow-xl px-4 py-3">
          <FaMessage className="mt-1.5" />
          <textarea
            rows={7}
            cols={1}
            placeholder="your message here ...."
            className="resize-none w-full outline-none bg-inherit"
          />
        </span>
        <button
          type="submit"
          className="bg-slate-950 text-white rounded-sm w-full flex justify-center items-center px-4 py-3 shadow-amber-md "
        >
          Submit
        </button>
        <div className="w-full flex items-center gap-2 ">
          <div className="w-1/2 h-[1px] border-b border-slate-950/50" />
          or
          <div className="w-1/2 h-[1px] border-b border-slate-950/50" />
        </div>
        <button
          type="submit"
          className="bg-slate-950 text-white rounded-sm w-full flex justify-center items-center px-4 py-3 shadow-amber-md "
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Contact;
