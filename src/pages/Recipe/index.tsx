import { useState } from "react";

import { Button, Footer, Header } from "@/components";
import { Actions, BackButton, Container, Content, Image, Ingredients } from "./styles";

import careLeftIcon from "@/assets/care_left-icon.svg";
import minusIcon from "@/assets/minus-icon.svg";
import plusIcon from "@/assets/plus-icon.svg";
import receiptIcon from "@/assets/receipt-icon.svg";

export function Recipe() {
	const [count, setCount] = useState(1);

	function removeProductCount() {
		if (count > 1) setCount(count - 1);
	}

	function addProductCount() {
		setCount(count + 1);
	}

	return (
		<Container>
			<Header />

			<main>
				<BackButton>
					<img src={careLeftIcon} alt="care left icon" />
					voltar
				</BackButton>

				<Image>
					<img src="/img/Mask group.png" alt="Product name" />
				</Image>

				<Content>
					<h1>Salada</h1>
					<p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

					<Ingredients>
						<p>alface</p>
						<p>cebola</p>
						<p>pão naan</p>
						<p>pepino</p>
						<p>rabanete</p>
						<p>tomate</p>
					</Ingredients>
				</Content>

				<Actions>
					<div>
						<img src={minusIcon} alt="minus icon" onClick={removeProductCount} />
						<p>{String(count).padStart(2, "0")}</p>
						<img src={plusIcon} alt="plus icon" onClick={addProductCount} />
					</div>
					<Button type="button" text="pedir ∙ R$ 25,00">
						<img src={receiptIcon} alt="receipt icon" />
					</Button>
				</Actions>
			</main>

			<Footer />
		</Container>
	);
}
