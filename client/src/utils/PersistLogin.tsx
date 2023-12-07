import { useEffect, useState } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthStore } from "../state/AuthStore";
import { LuLoader2 } from "react-icons/lu";
const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const navigate = useNavigate();
  const user = AuthStore((state) => state.user);
  const token = AuthStore((state) => state.token);

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.log(err);
        navigate("/login");
      } finally {
        setIsLoading(false);
      }
    };
    !token || !user ? verifyRefreshToken() : setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="h-full flex p-4 justify-center">
          <LuLoader2 className="animate-spin" />
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default PersistLogin;
