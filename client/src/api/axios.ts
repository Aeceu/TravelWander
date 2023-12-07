import axios from "axios";

const localUrl = "http://localhost:4200/api/v1";

export default axios.create({
  baseURL: localUrl,
});

export const axiosPrivate = axios.create({
  baseURL: localUrl,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
