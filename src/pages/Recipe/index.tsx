import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { PiReceipt, PiCaretLeft } from "react-icons/pi";
import { useNavigate, useParams } from "react-router-dom";

import { Button, Footer, Header } from "@/components";
import { Actions, BackButton, Container, Content, Image, Ingredients } from "./styles";

import { Recipe as IRecipe } from "@/@types";
import { useAuth } from "@/hooks/useAuth";
import { api } from "@/services/api";

export function Recipe() {
	const { user } = useAuth();
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();

	const [count, setCount] = useState(1);
	const [recipe, setRecipe] = useState<IRecipe | null>();

	useEffect(() => {
		api
			.get(`/recipes/${id}`)
			.then((response: AxiosResponse<IRecipe>) => {
				setRecipe(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [id]);

	const imageUrl = recipe?.image ? `${api.defaults.baseURL}/files/${recipe?.image}` : "/img/Mask group.png";

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
				<BackButton onClick={() => navigate(-1)}>
					<PiCaretLeft />
					voltar
				</BackButton>

				<Image>
					<img src={imageUrl} alt={recipe?.name} />
				</Image>

				<Content>
					<h1>{recipe?.name}</h1>
					<p>{recipe?.description}</p>

					<Ingredients>
						{recipe?.ingredients.map((ingredient, index) => (
							<p key={String(index)}>{ingredient}</p>
						))}
					</Ingredients>
				</Content>

				<Actions>
					{user.admin ? (
						<Button type="button" text="Editar prato" onClick={() => navigate(`/admin/edit/${recipe?.id}`)} />
					) : (
						<>
							<div>
								<FiMinus onClick={removeProductCount} />
								<p>{String(count).padStart(2, "0")}</p>
								<FiPlus alt="plus icon" onClick={addProductCount} />
							</div>
							<Button
								type="button"
								text={`pedir ∙ R$ ${count > 0 && recipe?.price ? recipe?.price * count : recipe?.price}`}
								icon={PiReceipt}
							/>
						</>
					)}
				</Actions>
			</main>

			<Footer />
		</Container>
	);
}
