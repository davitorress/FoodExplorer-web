import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

import logoImg from "@/assets/logo.svg";
import logoAdminImg from "@/assets/logo_admin.svg";

import { Container } from "./styles";

export function Logo({ onClick }: { onClick?: () => void }) {
	const { user } = useAuth();
	const navigate = useNavigate();

	return (
		<Container onClick={onClick ? onClick : () => navigate("/")}>
			{user && user.admin ? <img src={logoAdminImg} alt="FoodExplorer" /> : <img src={logoImg} alt="FoodExplorer" />}
		</Container>
	);
}
