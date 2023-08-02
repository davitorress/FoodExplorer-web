import { useState } from "react";
import { Link } from "react-router-dom";

import { Button, Input, Logo } from "@/components";
import { Container, Form } from "./styles";

import { useAuth } from "@/hooks/useAuth";
import { notify } from "@/utils/notify";

export function SignIn() {
	const { signIn } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (!email || !password) notify("warning", "Preencha todos os campos");
		else {
			signIn({ email, password });
			setEmail("");
			setPassword("");
		}
	}

	return (
		<Container>
			<Logo />
			<Form onSubmit={handleSubmit}>
				<h1>Faça Login</h1>

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

				<Link to="/register">Criar uma conta</Link>
			</Form>
		</Container>
	);
}
