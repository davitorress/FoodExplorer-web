import { Link } from "react-router-dom";

import { Button, Input, Logo } from "@/components";
import { Container, Form } from "./styles";

export function SignIn() {
	return (
		<Container>
			<Logo />
			<Form>
				<h1>Faça Login</h1>

				<Input.Root>
					<Input.Label id="email" text="Email" />
					<Input.Field id="email" type="email" placeholder="Exemplo: exemplo@exemplo.com.br" />
				</Input.Root>

				<Input.Root>
					<Input.Label id="password" text="Senha" />
					<Input.Field id="password" type="password" placeholder="No mínimo 6 caracteres" />
				</Input.Root>

				<Button type="submit" text="Entrar" />

				<Link to="/register">Criar uma conta</Link>
			</Form>
		</Container>
	);
}
