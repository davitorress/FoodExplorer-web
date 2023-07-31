import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export function useAuth() {
	const ctx = useContext(AuthContext);
	return ctx;
}
