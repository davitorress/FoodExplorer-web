import { Header, Recipes, Footer } from "@/components";
import { Container, Banner } from "./styles";

import bannerImg from "@/assets/section_img.png";

const recipes = [
	{ name: "Salada 1", price: 49.97, img: "/img/Mask group.png" },
	{ name: "Salada 2", price: 49.97, img: "/img/Mask group.png" },
	{ name: "Salada 3", price: 49.97, img: "/img/Mask group.png" },
];

export function Home() {
	return (
		<Container>
			<Header />

			<main>
				<Banner>
					<img src={bannerImg} alt="" />

					<h2>Sabores inigualáveis</h2>
					<p>Sinta o cuidado de preparo com ingredientes selecionados.</p>
				</Banner>

				<Recipes.Root>
					<Recipes.Carousel title="Refeições">
						{recipes.map((recipe, index) => (
							<Recipes.Item key={String(index)} name={recipe.name} price={recipe.price} hasActions />
						))}
					</Recipes.Carousel>
					<Recipes.Carousel title="Pratos Principais">
						{recipes.map((recipe, index) => (
							<Recipes.Item key={String(index)} name={recipe.name} price={recipe.price} hasActions />
						))}
					</Recipes.Carousel>
					<Recipes.Carousel title="Bebidas">
						{recipes.map((recipe, index) => (
							<Recipes.Item key={String(index)} name={recipe.name} price={recipe.price} hasActions />
						))}
					</Recipes.Carousel>
				</Recipes.Root>
			</main>

			<Footer />
		</Container>
	);
}
