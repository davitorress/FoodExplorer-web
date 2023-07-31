import { Routes, Route } from "react-router-dom";

import { Home } from "@/pages/Home";
import { Recipe } from "@/pages/Recipe";

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/recipe/:id" element={<Recipe />} />
		</Routes>
	);
}
