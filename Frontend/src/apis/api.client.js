import { getToken } from "@clerk/react";
import axios from "axios";

const url = "https://chat-app-jzrd.onrender.com";

const api = axios.create({
  baseURL: url,
  timeout: url?.includes("localhost") ? 5000 : 10000,
});

api.interceptors.request.use(async (config) => {
  const token = await getToken();
  console.log("TOKEN:", token);

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use((res) => res.data);

export default api;
