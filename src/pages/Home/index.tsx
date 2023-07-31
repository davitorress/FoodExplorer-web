import { Header, Recipes, Footer } from "@/components";
import { Container, Banner } from "./styles";

import bannerImg from "@/assets/section_img1.png";

const recipes = [
	{ name: "Salada 1", description: "Massa fresca com camarões e pesto.", price: 49.97, img: "/img/Mask group.png" },
	{ name: "Salada 2", description: "Massa fresca com camarões e pesto.", price: 49.97, img: "/img/Mask group.png" },
	{ name: "Salada 3", description: "Massa fresca com camarões e pesto.", price: 49.97, img: "/img/Mask group.png" },
	{ name: "Salada 3", description: "Massa fresca com camarões e pesto.", price: 49.97, img: "/img/Mask group.png" },
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

				<Recipes.Root title="Refeições">
					{recipes.map((recipe, index) => (
						<Recipes.Item
							key={String(index)}
							name={recipe.name}
							description={recipe.description}
							price={recipe.price}
						/>
					))}
				</Recipes.Root>

				<Recipes.Root title="Pratos principais">
					{recipes.map((recipe, index) => (
						<Recipes.Item
							key={String(index)}
							name={recipe.name}
							description={recipe.description}
							price={recipe.price}
						/>
					))}
				</Recipes.Root>

				<Recipes.Root title="Bebidas">
					{recipes.map((recipe, index) => (
						<Recipes.Item
							key={String(index)}
							name={recipe.name}
							description={recipe.description}
							price={recipe.price}
						/>
					))}
				</Recipes.Root>
			</main>

			<Footer />
		</Container>
	);
}
