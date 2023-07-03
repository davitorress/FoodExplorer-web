import { Logo, Input, Button } from "@/components";
import { Container, Form } from "./styles";

export function SignUp() {
	return (
		<Container>
			<Logo />

			<Form>
				<Input id="name" type="text" label="Seu nome" placeholder="Exemplo: Maria da Silva" />
				<Input id="email" type="email" label="Email" placeholder="Exemplo: exemplo@exemplo.com" />
				<Input id="password" type="password" label="Senha" placeholder="No mínimo 6 caracteres" />

				<Button type="submit" text="Criar conta" />

				<a href="#">Já tenho uma conta</a>
			</Form>
		</Container>
	);
}
