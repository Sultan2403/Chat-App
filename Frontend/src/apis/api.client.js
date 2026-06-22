import { getToken } from "@clerk/react";
import axios from "axios"

const url = import.meta.env.VITE_API_URL

console.log(url)

const api = axios.create({
    baseURL: url,
    timeout: url.includes("localhost") ? 5000 : 10000,
})

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res.data
);

const test = async () => {
  try {
    const response = await api.post("/protected", { data: "test" });
    console.log("Response from protected route:", response);
  } catch (error) {
    console.error(error);
  }
}

test()

export default api
