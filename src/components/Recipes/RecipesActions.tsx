import { useState, MouseEvent } from "react";

import { Button } from "@/components";
import { Actions } from "./styles";

import minusIcon from "@/assets/minus-icon.svg";
import plusIcon from "@/assets/plus-icon.svg";

export function RecipesActions() {
	const [count, setCount] = useState(1);

	function handleActionClick(ev: MouseEvent<HTMLDivElement>) {
		ev.stopPropagation();
	}

	function removeProductCount() {
		if (count > 1) setCount(count - 1);
	}

	function addProductCount() {
		setCount(count + 1);
	}

	return (
		<Actions onClick={handleActionClick}>
			<div>
				<img src={minusIcon} alt="minus icon" onClick={removeProductCount} />
				<p>{String(count).padStart(2, "0")}</p>
				<img src={plusIcon} alt="plus icon" onClick={addProductCount} />
			</div>
			<Button type="button" text="incluir" />
		</Actions>
	);
}
