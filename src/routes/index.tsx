import { BrowserRouter } from "react-router-dom";

import { useAuth } from "@/hooks/useAuth";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { AdminRoutes } from "./admin.routes";

export function Routes() {
	const { user } = useAuth();

	return <BrowserRouter>{user ? user.admin ? <AdminRoutes /> : <AppRoutes /> : <AuthRoutes />}</BrowserRouter>;
}
