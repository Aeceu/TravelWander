import { create } from "zustand";
import { TUser } from "../types";

type TAuthStore = {
  user: TUser;
  token: string;
  setUser: (user: TUser) => void;
  setToken: (token: string) => void;
};

export const AuthStore = create<TAuthStore>()((set) => ({
  user: {
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    role: "",
    refreshToken: "",
    createdAt: "",
    updatedAt: "",
  },
  token: "",
  setToken: (token) => {
    set({ token });
  },
  setUser: (user) => {
    set({ user });
  },
}));
