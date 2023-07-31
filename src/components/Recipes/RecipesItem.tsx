import { FiHeart } from "react-icons/fi";

import { Recipes } from ".";
import { Image, Item } from "./styles";

interface RecipeItemProps {
	name: string;
	price: number;
	description: string;
}

export function RecipesItem({ name, description, price }: RecipeItemProps) {
	function handleItemClick() {
		console.log("Item clicked");
	}

	return (
		<Item onClick={handleItemClick}>
			<FiHeart />

			<Image>
				<img src="/img/Mask group.png" alt="Product name" />
			</Image>

			<h3>{`${name} >`}</h3>
			<span>{description}</span>
			<p>R$ {price}</p>

			<Recipes.Actions />
		</Item>
	);
}
