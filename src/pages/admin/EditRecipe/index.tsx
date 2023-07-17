import { PiCaretLeft, PiUploadSimple } from "react-icons/pi";

import { Button, Footer, Header, Input } from "@/components";
import { Container, Form, BackButton, Buttons } from "./styles";

export function EditRecipe() {
	return (
		<Container>
			<Header />

			<main>
				<BackButton>
					<PiCaretLeft />
					voltar
				</BackButton>

				<h1>Editar prato</h1>

				<Form>
					<Input.Root>
						<Input.Label id="name" text="Imagem do prato" />
						<Input.Group>
							<Input.Icon icon={PiUploadSimple} />
							<Input.File id="img" placeholder="Selecione uma imagem para alterá-la" accept=".png, .jpg, .jpeg" />
						</Input.Group>
					</Input.Root>

					<Input.Root>
						<Input.Label id="name" text="Nome" />
						<Input.Field id="name" defaultValue="Salada César" />
					</Input.Root>

					<Input.Root>
						<Input.Label id="category" text="Categoria" />
						<Input.Select id="category" defaultValue={1}>
							<option value="0">Refeição</option>
							<option value="1">Bebidas</option>
						</Input.Select>
					</Input.Root>

					<Input.Root>
						<Input.Label text="Ingredientes" />
						<Input.Items>
							<Input.Item value="Pão Naan" />
							<Input.Item placeholder="Adicionar" isNew />
						</Input.Items>
					</Input.Root>

					<Input.Root>
						<Input.Label id="price" text="Preço" />
						<Input.Field id="price" defaultValue="R$ 40,00" />
					</Input.Root>

					<Input.Root>
						<Input.Label id="description" text="Descrição" />
						<Input.Textarea id="description" defaultValue="A Salada César é uma opção refrescante para o verão." />
					</Input.Root>

					<Buttons>
						<Button type="reset" text="Excluir prato" />
						<Button type="submit" text="Salvar alterações" />
					</Buttons>
				</Form>
			</main>

			<Footer />
		</Container>
	);
}
