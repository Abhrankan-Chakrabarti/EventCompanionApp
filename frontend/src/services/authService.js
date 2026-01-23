import axios from "axios";
import { API_BASE_URL } from "../config/api";

const API = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export const registerUser = (data) => API.post("/auth/register", data);
export const loginUser = (data) => API.post("/auth/login", data);
export const logoutUser = () => API.post("/auth/logout");
export const getMe = () => API.get("/auth/me");
