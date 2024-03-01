import axios from "axios";

const client = axios.create({
  baseURL: "https://roblox-backend.onrender.com/api/v1",
});

export default client;
