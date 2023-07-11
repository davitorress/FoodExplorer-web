import { FiHeart } from "react-icons/fi";

import { Recipes } from ".";
import { Image, Item } from "./styles";

interface RecipeItemProps {
	name: string;
	price: number;
	hasActions: boolean;
}

export function RecipesItem({ name, price, hasActions = false }: RecipeItemProps) {
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
			<p>R$ {price}</p>

			{hasActions && <Recipes.Actions />}
		</Item>
	);
}
