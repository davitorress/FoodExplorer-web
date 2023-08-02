import { Routes, Route, Navigate } from "react-router-dom";

import { SignIn } from "@/pages/SignIn";
import { SignUp } from "@/pages/SignUp";
import { SignIn as AdminSignIn } from "@/pages/admin/SignIn";

export function AuthRoutes() {
	return (
		<Routes>
			<Route path="/" element={<SignIn />} />
			<Route path="/register" element={<SignUp />} />
			<Route path="/adm" element={<AdminSignIn />} />
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	);
}
