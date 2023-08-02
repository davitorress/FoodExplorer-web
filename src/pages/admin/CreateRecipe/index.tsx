import { AxiosResponse } from "axios";
import { useState, useEffect, createRef } from "react";
import { useNavigate } from "react-router-dom";
import { PiCaretLeft, PiUploadSimple } from "react-icons/pi";

import { Button, Footer, Header, Input } from "@/components";
import { Container, Form, BackButton } from "./styles";

import { api } from "@/services/api";
import { Category } from "@/@types";

export function CreateRecipe() {
	const navigate = useNavigate();

	const [categories, setCategories] = useState([] as Category[]);

	useEffect(() => {
		api
			.get("/recipes")
			.then((response: AxiosResponse<Category[] | []>) => setCategories(response.data))
			.catch(() => {
				alert("Erro ao carregar as categorias.");
			});
	}, []);

	const imageRef = createRef<HTMLInputElement>();

	const [name, setName] = useState("");
	const [price, setPrice] = useState("00,00");
	const [category, setCategory] = useState(0);
	const [description, setDescription] = useState("");
	const [image, setImage] = useState<File | undefined>(undefined);

	const [ingredient, setIngredient] = useState("");
	const [ingredients, setIngredients] = useState<string[]>([]);

	function handleAddIngredient() {
		setIngredients((prev) => [...prev, ingredient]);
		setIngredient("");
	}

	function handleRemoveIngredient(deleted: string) {
		setIngredients((prev) => prev.filter((ingredient) => ingredient !== deleted));
	}

	function handleChangeImage(event: React.ChangeEvent<HTMLInputElement>) {
		const file = event.target.files?.[0];
		setImage(file);

		alert("Imagem salva com sucesso!");
	}

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		if (ingredient.length > 0) {
			alert("Adicione o ingrediente antes de salvar.");
			return null;
		}

		if (!name || !price || !category || !description || !image || !ingredients.length) {
			alert("Preencha todos os campos.");
		} else {
			const numberPrice = Number(String(price).replace(",", "."));

			api
				.post("/recipes", { name, price: numberPrice, category_id: category, description, ingredients })
				.then((response: AxiosResponse<{ id: number }>) => {
					if (response.status === 201) {
						const fileUpload = new FormData();
						fileUpload.append("image", image as File);

						api
							.patch(`/recipes/${response.data.id}/image`, fileUpload)
							.then(() => {
								alert("Prato cadastrado com sucesso!");
							})
							.catch(() => {
								api.delete(`/recipes/${response.data.id}`).then(() => {
									alert("Erro ao cadastrar o prato.");
								});
							});

						navigate(-1);
					}
				})
				.catch(() => {
					alert("Erro ao cadastrar o prato.");
				});
		}
	}

	return (
		<Container>
			<Header />

			<main>
				<BackButton onClick={() => navigate(-1)}>
					<PiCaretLeft />
					voltar
				</BackButton>

				<h1>Novo prato</h1>

				<Form onSubmit={handleSubmit}>
					<Input.Root>
						<Input.Label id="name" text="Imagem do prato" />
						<Input.Group onClick={() => imageRef?.current?.click()}>
							<Input.Icon icon={PiUploadSimple} />
							<Input.File
								id="img"
								ref={imageRef}
								placeholder="Selecione uma imagem"
								accept=".png, .jpg, .jpeg"
								onChange={handleChangeImage}
							/>
						</Input.Group>
					</Input.Root>

					<Input.Root>
						<Input.Label id="name" text="Nome" />
						<Input.Field
							id="name"
							placeholder="Ex.: Salada César"
							value={name}
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
						/>
					</Input.Root>

					<Input.Root>
						<Input.Label id="category" text="Categoria" />
						<Input.Select
							id="category"
							value={category}
							onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setCategory(Number(event.target.value))}
						>
							{categories.map((category) => (
								<option key={String(category.id)} value={category.id}>
									{category.name}
								</option>
							))}
						</Input.Select>
					</Input.Root>

					<Input.Root>
						<Input.Label id="ingredients" text="Ingredientes" />
						<Input.Items>
							{ingredients.map((ingredient, index) => (
								<Input.Item key={String(index)} value={ingredient} onClick={() => handleRemoveIngredient(ingredient)} />
							))}

							<Input.Item
								isNew
								placeholder="Adicionar"
								value={ingredient}
								onClick={handleAddIngredient}
								onChange={(event: React.ChangeEvent<HTMLInputElement>) => setIngredient(event.target.value)}
							/>
						</Input.Items>
					</Input.Root>

					<Input.Root>
						<Input.Label id="price" text="Preço" />
						<Input.Field
							id="price"
							placeholder="00,00"
							value={price}
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPrice(event.target.value)}
						/>
					</Input.Root>

					<Input.Root>
						<Input.Label id="description" text="Descrição" />
						<Input.Textarea
							id="description"
							placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
							value={description}
							onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(event.target.value)}
						/>
					</Input.Root>

					<Button type="submit" text="Cadastrar" />
				</Form>
			</main>

			<Footer />
		</Container>
	);
}
