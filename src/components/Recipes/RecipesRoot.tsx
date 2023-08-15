import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";

import { Container } from "./styles";

interface RecipesRootProps {
	title: string;
	children: React.ReactNode;
}

export function RecipesRoot({ title, children }: RecipesRootProps) {
	return (
		<Container>
			<h2>{title}</h2>
			<Slider
				arrows={true}
				infinite={false}
				slidesToShow={4}
				slidesToScroll={1}
				adaptiveHeight={false}
				nextArrow={<PiCaretRight />}
				prevArrow={<PiCaretLeft />}
				responsive={[
					{
						breakpoint: 1441,
						settings: {
							slidesToShow: 3,
						},
					},
					{
						breakpoint: 1025,
						settings: {
							slidesToShow: 2,
						},
					},
					{
						breakpoint: 426,
						settings: {
							slidesToShow: 2,
							centerMode: false,
						},
					},
					{
						breakpoint: 376,
						settings: {
							slidesToShow: 1,
							centerMode: false,
						},
					},
				]}
			>
				{children}
			</Slider>
		</Container>
	);
}
