import logoImg from "@/assets/logo.svg";
import logoAdminImg from "@/assets/logo_admin.svg";

import { Container } from "./styles";

export function Logo() {
	return (
		<Container>
			<img src={logoImg} alt="FoodExplorer" />
		</Container>
	);
}
