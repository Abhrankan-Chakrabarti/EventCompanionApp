import axios from "axios";
import { API_BASE_URL } from "../config/api";

const API = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export const createEvent = (data) => API.post("/events", data);
export const getMyEvents = () => API.get("/events/my");