import { useNavigate } from "react-router-dom";
import { PiCaretLeft, PiUploadSimple } from "react-icons/pi";

import { Button, Footer, Header, Input } from "@/components";
import { Container, Form, BackButton } from "./styles";

export function CreateRecipe() {
	const navigate = useNavigate();

	return (
		<Container>
			<Header />

			<main>
				<BackButton onClick={() => navigate(-1)}>
					<PiCaretLeft />
					voltar
				</BackButton>

				<h1>Novo prato</h1>

				<Form>
					<Input.Root>
						<Input.Label id="name" text="Imagem do prato" />
						<Input.Group>
							<Input.Icon icon={PiUploadSimple} />
							<Input.File id="img" placeholder="Selecione uma imagem" accept=".png, .jpg, .jpeg" />
						</Input.Group>
					</Input.Root>

					<Input.Root>
						<Input.Label id="name" text="Nome" />
						<Input.Field id="name" placeholder="Ex.: Salada César" />
					</Input.Root>

					<Input.Root>
						<Input.Label id="category" text="Categoria" />
						<Input.Select id="category">
							<option value="0">Refeição</option>
						</Input.Select>
					</Input.Root>

					<Input.Root>
						<Input.Label id="ingredients" text="Ingredientes" />
						<Input.Items>
							<Input.Item value="Pão Naan" />
							<Input.Item placeholder="Adicionar" isNew />
						</Input.Items>
					</Input.Root>

					<Input.Root>
						<Input.Label id="price" text="Preço" />
						<Input.Field id="price" placeholder="R$ 00,00" />
					</Input.Root>

					<Input.Root>
						<Input.Label id="description" text="Descrição" />
						<Input.Textarea
							id="description"
							placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
						/>
					</Input.Root>

					<Button type="submit" text="Cadastrar" />
				</Form>
			</main>

			<Footer />
		</Container>
	);
}
