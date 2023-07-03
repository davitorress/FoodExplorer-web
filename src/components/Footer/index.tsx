import { Container, Logo } from "./styles";

import logoGrayscale from "@/assets/logo_grayscale.svg";

export function Footer() {
	return (
		<Container>
			<Logo>
				<img src={logoGrayscale} alt="FoodExplorer" />
			</Logo>
			<p>© 2023 - Todos os direitos reservados.</p>
		</Container>
	);
}
