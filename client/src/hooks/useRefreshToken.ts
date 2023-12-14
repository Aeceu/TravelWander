import axios from "../api/axios";
import { AuthStore } from "../state/AuthStore";

const useRefreshToken = () => {
  const setUser = AuthStore((state) => state.setUser);
  const setToken = AuthStore((state) => state.setToken);

  const refresh = async () => {
    const res = await axios.get("/refresh", {
      withCredentials: true,
    });
    setToken(res.data.accessToken);
    setUser(res.data.user);
    return res.data;
  };
  return refresh;
};

export default useRefreshToken;
