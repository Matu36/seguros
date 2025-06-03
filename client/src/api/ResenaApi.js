import axios from "axios";

export const ResenaAPI = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}resena`,
});
