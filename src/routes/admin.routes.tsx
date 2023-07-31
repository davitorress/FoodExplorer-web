import { Routes, Route, Navigate } from "react-router-dom";

import { CreateRecipe } from "@/pages/admin/CreateRecipe";
import { EditRecipe } from "@/pages/admin/EditRecipe";

import { Home } from "@/pages/Home";
import { Recipe } from "@/pages/Recipe";

export function AdminRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/recipe/:id" element={<Recipe />} />
			<Route path="/admin/create" element={<CreateRecipe />} />
			<Route path="/admin/edit/:id" element={<EditRecipe />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
}
