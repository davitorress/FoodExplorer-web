import { ReactNode } from "react";

import { Carousel, List } from "./styles";

interface RecipesCarouselProps {
	title: string;
	children?: ReactNode;
}

export function RecipesCarousel({ title, children }: RecipesCarouselProps) {
	return (
		<Carousel>
			<h2>{title}</h2>
			<List>{children}</List>
		</Carousel>
	);
}
