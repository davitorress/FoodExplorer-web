import styled from "styled-components";

export const Container = styled.section`
	width: 100%;
	min-height: 100vh;

	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: auto 1fr auto;

	> main {
		width: 100%;
		padding: 12px 32px 54px;

		display: flex;
		flex-direction: column;
		align-items: center;

		h1 {
			margin: 24px 0;
			font-weight: 500;
			font-size: 3.2rem;
			align-self: flex-start;
			font-family: "Poppins", sans-serif;
		}
	}
`;

export const BackButton = styled.button`
	align-self: flex-start;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 4px;

	border: none;
	background-color: transparent;

	font-weight: 500;
	font-size: 1.6rem;
	font-family: "Poppins", sans-serif;
	color: ${({ theme }) => theme.COLORS.LIGHT_300};

	svg {
		font-size: 22px;
	}

	@media ${({ theme }) => theme.DEVICES.LAPTOP} {
		font-size: 2.4rem;

		svg {
			font-size: 32px;
		}
	}
`;

export const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 24px;

	@media ${({ theme }) => theme.DEVICES.LAPTOP} {
		display: grid;
		grid-gap: 32px;
		grid-template-areas:
			"image name category"
			"ingredientes ingredientes price"
			"description description description"
			"actions actions actions";
		grid-template-columns: max-content 1fr max-content;

		> div:nth-child(1) {
			grid-area: image;
			width: fit-content;

			div {
				padding: 12px 32px;
			}
		}

		> div:nth-child(2) {
			grid-area: name;
		}

		> div:nth-child(3) {
			grid-area: category;
		}

		> div:nth-child(4) {
			grid-area: ingredientes;
		}

		> div:nth-child(5) {
			grid-area: price;
		}

		> div:nth-child(6) {
			grid-area: description;
		}
	}
`;

export const Buttons = styled.section`
	width: 100%;
	display: flex;
	gap: 32px;

	button {
		width: 100%;
	}

	button[type="reset"] {
		background-color: ${({ theme }) => theme.COLORS.DARK_800};
	}

	button[type="submit"] {
		background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
	}

	@media ${({ theme }) => theme.DEVICES.LAPTOP} {
		grid-area: actions;
		justify-content: flex-end;

		button {
			width: fit-content;
		}
	}
`;
