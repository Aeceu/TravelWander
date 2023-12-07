import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import FootBar from "../components/FootBar";

const Layout = () => {
  return (
    <div className="h-screen w-full flex flex-col">
      <NavBar />
      <Outlet />
      <FootBar />
    </div>
  );
};

export default Layout;
