import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <Outlet />
    </div>
  );
};

export default Layout;
