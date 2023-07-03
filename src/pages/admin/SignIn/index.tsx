import { Button, Input, Logo } from "@/components";
import { Container, Form } from "./styles";

export function SignIn() {
	return (
		<Container>
			<Logo />
			<Form>
				<Input id="email" label="Email" type="email" placeholder="Exemplo: exemplo@exemplo.com.br" />
				<Input id="password" label="Senha" type="password" placeholder="No mínimo 6 caracteres" />

				<Button type="submit" text="Entrar" />
			</Form>
		</Container>
	);
}
