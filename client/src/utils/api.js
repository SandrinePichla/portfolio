import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5174/api",
  timeout: 8000,
});

// (optionnel) petit log d'erreur pour debug
api.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error("[API ERROR]", err?.response?.status, err?.message);
    return Promise.reject(err);
  }
);