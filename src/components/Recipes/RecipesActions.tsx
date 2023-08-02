import { useState, MouseEvent } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

import { Button } from "@/components";
import { Actions } from "./styles";

import { useAuth } from "@/hooks/useAuth";

export function RecipesActions() {
	const { user } = useAuth();
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

	if (user.admin) return null;

	return (
		<Actions onClick={handleActionClick}>
			<div>
				<FiMinus onClick={removeProductCount} />
				<p>{String(count).padStart(2, "0")}</p>
				<FiPlus onClick={addProductCount} />
			</div>
			<Button type="button" text="incluir" />
		</Actions>
	);
}
