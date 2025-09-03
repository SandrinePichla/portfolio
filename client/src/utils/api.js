const base = import.meta.env.VITE_API_URL || "http://localhost:5174/api";
export const api = {
  async get(path) {
    const res = await fetch(`${base}${path}`);
    if (!res.ok) throw new Error("API error");
    return res.json();
  }
};