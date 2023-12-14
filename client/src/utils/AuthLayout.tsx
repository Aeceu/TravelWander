import { Outlet } from "react-router-dom";
import AuthInfo from "../components/AuthInfo";

const AuhtLayout = () => {
  return (
    <div className="h-screen w-full flex justify-between">
      <AuthInfo />
      <Outlet />
    </div>
  );
};
export default AuhtLayout;
