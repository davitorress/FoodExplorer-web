import styled from "styled-components";

export const Container = styled.section`
	width: 100%;
	min-height: 100vh;

	> main {
		width: 100%;
		padding: 16px 56px 34px;

		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export const BackButton = styled.button`
	align-self: flex-start;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;

	border: none;
	background-color: transparent;

	font-weight: 500;
	font-size: 2.4rem;
	font-family: "Poppins", sans-serif;
	color: ${({ theme }) => theme.COLORS.LIGHT_300};
`;

export const Image = styled.picture`
	width: 264px;
	height: 264px;
	display: block;
	border-radius: 99%;

	margin: 16px 0;

	> img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const Content = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 24px;

	text-align: center;
	font-family: "Poppins", sans-serif;
	color: ${({ theme }) => theme.COLORS.LIGHT_300};

	> h1 {
		font-weight: 500;
		font-size: 2.8rem;
	}

	> p {
		font-weight: 400;
		font-size: 1.6rem;
	}
`;

export const Ingredients = styled.div`
	width: 100%;

	display: grid;
	grid-row-gap: 24px;
	grid-template-columns: repeat(3, max-content);
	justify-content: space-between;

	> p {
		padding: 4px 8px;

		font-weight: 500;
		font-size: 1.4rem;
		line-height: 2.4rem;
		font-family: "Poppins", sans-serif;

		border-radius: 4px;
		background-color: ${({ theme }) => theme.COLORS.DARK_1000};
	}
`;

export const Actions = styled.div`
	width: 100%;
	margin-top: 48px;

	display: flex;
	gap: 16px;

	> div {
		width: fit-content;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 16px;

		svg {
			width: 28px;
			height: 28px;
		}

		p {
			font-weight: 700;
			font-size: 2.2rem;
			font-family: "Roboto", sans-serif;
			color: ${({ theme }) => theme.COLORS.LIGHT_300};
		}
	}

	> button {
		width: 100%;
		font-size: 1.2rem;
		line-height: 1.6rem;

		img {
			width: 22px;
		}
	}
`;
