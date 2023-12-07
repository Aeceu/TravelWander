import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import { AuthStore } from "../state/AuthStore";

export const useLogOut = () => {
  const setUser = AuthStore((state) => state.setUser);
  const setToken = AuthStore((state) => state.setToken);
  const navigate = useNavigate();
  const logout = async () => {
    setUser({
      id: "",
      firstname: "",
      lastname: "",
      email: "",
      role: "",
      refreshToken: "",
      createdAt: "",
      updatedAt: "",
    });
    setToken("");

    try {
      await axios
        .get("/logout", {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data, res.status);

          navigate("/login");
        });
    } catch (error) {
      console.log(error);
    }
  };
  return logout;
};
