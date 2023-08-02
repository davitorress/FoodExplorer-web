import { useState } from "react";
import { Link } from "react-router-dom";

import { Logo, Input, Button } from "@/components";
import { Container, Form } from "./styles";

import { useAuth } from "@/hooks/useAuth";
import { notify } from "@/utils/notify";

export function SignUp() {
	const { signUp } = useAuth();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (!name || !email || !password) notify("warning", "Preencha todos os campos");
		else {
			signUp({ name, email, password });
			setName("");
			setEmail("");
			setPassword("");
		}
	}

	return (
		<Container>
			<Logo />

			<Form onSubmit={handleSubmit}>
				<h1>Crie sua conta</h1>

				<Input.Root>
					<Input.Label id="name" text="Seu nome" />
					<Input.Field
						id="name"
						placeholder="Exemplo: Maria da Silva"
						value={name}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
					/>
				</Input.Root>

				<Input.Root>
					<Input.Label id="email" text="Email" />
					<Input.Field
						id="email"
						type="email"
						placeholder="Exemplo: exemplo@exemplo.com"
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

				<Button type="submit" text="Criar conta" />

				<Link to="/">Já tenho uma conta</Link>
			</Form>
		</Container>
	);
}
