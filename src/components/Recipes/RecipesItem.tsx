import { Recipes } from ".";
import { Image, Item } from "./styles";

import hearthIcon from "@/assets/hearth-icon.svg";

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
			<img src={hearthIcon} alt="hearth icon" />

			<Image>
				<img src="/img/Mask group.png" alt="Product name" />
			</Image>

			<h3>{`${name} >`}</h3>
			<p>R$ {price}</p>

			{hasActions && <Recipes.Actions />}
		</Item>
	);
}
