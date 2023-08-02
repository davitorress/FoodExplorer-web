import axios from "axios";

export const api = axios.create({
	baseURL: "https://dave-foodexplorer-api.onrender.com",
});
