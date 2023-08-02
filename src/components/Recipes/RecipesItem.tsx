import { FiHeart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { PiPencilSimple } from "react-icons/pi";

import { Recipes } from ".";
import { Image, Item } from "./styles";

import { api } from "@/services/api";
import { useAuth } from "@/hooks/useAuth";

interface RecipeItemProps {
	id: number;
	name: string;
	price: number;
	description: string;
	image: string | null;
}

export function RecipesItem({ id, image, name, description, price }: RecipeItemProps) {
	const navigate = useNavigate();
	const { user } = useAuth();

	const imageUrl = image ? `${api.defaults.baseURL}/files/${image}` : "/img/Mask group.png";

	function handleItemClick() {
		navigate(`/recipe/${id}`);
	}

	function handleEditRecipe(event: React.MouseEvent<HTMLOrSVGImageElement>) {
		event.stopPropagation();
		navigate(`/admin/edit/${id}`);
	}

	return (
		<Item id={String(id)} onClick={handleItemClick}>
			{user.admin ? <PiPencilSimple onClick={handleEditRecipe} /> : <FiHeart />}

			<Image>
				<img src={imageUrl} alt="Product name" />
			</Image>

			<h3>{`${name} >`}</h3>
			<span>{description}</span>
			<p>R$ {price}</p>

			<Recipes.Actions />
		</Item>
	);
}
