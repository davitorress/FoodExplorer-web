import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { PiReceipt, PiCaretLeft } from "react-icons/pi";

import { Button, Footer, Header } from "@/components";
import { Actions, BackButton, Container, Content, Image, Ingredients } from "./styles";

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
					<PiCaretLeft />
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
						<FiMinus onClick={removeProductCount} />
						<p>{String(count).padStart(2, "0")}</p>
						<FiPlus alt="plus icon" onClick={addProductCount} />
					</div>
					<Button type="button" text="pedir ∙ R$ 25,00" icon={PiReceipt} />
				</Actions>
			</main>

			<Footer />
		</Container>
	);
}
