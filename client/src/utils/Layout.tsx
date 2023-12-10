import { Outlet } from "react-router-dom";
// import { NavBar } from "../components/NavBar";
// import FootBar from "../components/FootBar";

const Layout = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <Outlet />
      {/* <FootBar /> */}
    </div>
  );
};

export default Layout;
