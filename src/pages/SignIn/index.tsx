import { Button, Input, Logo } from "@/components";
import { Container, Form } from "./styles";

export function SignIn() {
	return (
		<Container>
			<Logo />
			<Form>
				<Input.Root>
					<Input.Label id="email" text="Email" />
					<Input.Field id="email" type="email" placeholder="Exemplo: exemplo@exemplo.com.br" />
				</Input.Root>

				<Input.Root>
					<Input.Label id="password" text="Senha" />
					<Input.Field id="password" type="password" placeholder="No mínimo 6 caracteres" />
				</Input.Root>

				<Button type="submit" text="Entrar" />

				<a href="#">Criar uma conta</a>
			</Form>
		</Container>
	);
}
