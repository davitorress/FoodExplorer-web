import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Input } from "@/components";
import { Container, Form } from "./styles";

import { useAuth } from "@/hooks/useAuth";

import logoAdminImg from "@/assets/logo_admin.svg";

export function SignIn() {
	const { signIn } = useAuth();
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		signIn({ email, password, admin: true });
	}

	return (
		<Container>
			<picture onClick={() => navigate("/")}>
				<img src={logoAdminImg} alt="FoodExplorer" />
			</picture>

			<Form onSubmit={handleSubmit}>
				<h1>Faça Login (Administrativo)</h1>

				<Input.Root>
					<Input.Label id="email" text="Email" />
					<Input.Field
						id="email"
						type="email"
						placeholder="Exemplo: exemplo@exemplo.com.br"
						value={email}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
					/>
				</Input.Root>

				<Input.Root>
					<Input.Label id="password" text="Senha" />
					<Input.Field
						id="password"
						type="password"
						placeholder="No mínimo 6 caracteres"
						value={password}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
					/>
				</Input.Root>

				<Button type="submit" text="Entrar" />
			</Form>
		</Container>
	);
}
