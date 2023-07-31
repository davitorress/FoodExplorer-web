import { Link } from "react-router-dom";

import { Logo, Input, Button } from "@/components";
import { Container, Form } from "./styles";

export function SignUp() {
	return (
		<Container>
			<Logo />

			<Form>
				<h1>Crie sua conta</h1>

				<Input.Root>
					<Input.Label id="name" text="Seu nome" />
					<Input.Field id="name" placeholder="Exemplo: Maria da Silva" />
				</Input.Root>

				<Input.Root>
					<Input.Label id="email" text="Email" />
					<Input.Field id="email" type="email" placeholder="Exemplo: exemplo@exemplo.com" />
				</Input.Root>

				<Input.Root>
					<Input.Label id="password" text="Senha" />
					<Input.Field id="password" type="password" placeholder="No mínimo 6 caracteres" />
				</Input.Root>

				<Button type="submit" text="Criar conta" />

				<Link to="/">Já tenho uma conta</Link>
			</Form>
		</Container>
	);
}
