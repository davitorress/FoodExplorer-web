import { AxiosResponse } from "axios";
import { useState, useEffect } from "react";

import { Header, Recipes, Footer } from "@/components";
import { Container, Banner } from "./styles";

import bannerImg from "@/assets/section_img1.png";

import { api } from "@/services/api";
import { Category } from "@/@types";

export function Home() {
	const [search, setSearch] = useState("");
	const [searchRecipes, setSearchRecipes] = useState([] as Category[]);

	const [recipes, setRecipes] = useState([] as Category[]);

	function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
		setSearch(event.target.value);
	}

	useEffect(() => {
		if (search.length > 0) {
			api.get(`/recipes?name=${search}&ingredients=${search}`).then((response: AxiosResponse<Category[] | []>) => {
				if (response.status === 200) {
					setSearchRecipes(response.data);
				}
			});
		}
	}, [search]);

	useEffect(() => {
		api
			.get("/recipes?name=&category=")
			.then((response: AxiosResponse<Category[] | []>) => setRecipes(response.data))
			.catch(() => {
				alert("Erro ao carregar as receitas.");
			});
	}, []);

	return (
		<Container>
			<Header searchValue={search} searchOnChange={handleSearch} />

			<main>
				<Banner>
					<img src={bannerImg} alt="" />

					<h2>Sabores inigualáveis</h2>
					<p>Sinta o cuidado de preparo com ingredientes selecionados.</p>
				</Banner>

				{searchRecipes.length > 0 && (
					<Recipes.Root title="Resultados da busca">
						{searchRecipes.map((category) => {
							return category.recipes.map((recipe) => (
								<Recipes.Item
									id={recipe.id}
									image={recipe.image}
									key={String(recipe.id)}
									name={recipe.name}
									description={recipe.description}
									price={recipe.price}
								/>
							));
						})}
					</Recipes.Root>
				)}

				{recipes.map((category) => {
					return (
						<Recipes.Root key={String(category.id)} title={category.name}>
							{category.recipes.map((recipe) => (
								<Recipes.Item
									id={recipe.id}
									image={recipe.image}
									key={String(recipe.id)}
									name={recipe.name}
									description={recipe.description}
									price={recipe.price}
								/>
							))}
						</Recipes.Root>
					);
				})}
			</main>

			<Footer />
		</Container>
	);
}
