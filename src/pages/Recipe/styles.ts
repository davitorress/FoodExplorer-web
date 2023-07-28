import styled from "styled-components";

export const Container = styled.section`
	width: 100%;
	min-height: 100vh;

	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: auto 1fr auto;

	> main {
		width: 100%;
		padding: 16px 56px 34px;

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media ${({ theme }) => theme.DEVICES.LAPTOP} {
		> main {
			padding: 64px 120px 155px;

			display: grid;
			grid-gap: 48px;
			grid-template-areas:
				"backBtn backBtn"
				"image content"
				"image actions";
		}
	}
`;

export const BackButton = styled.button`
	width: fit-content;
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

	@media ${({ theme }) => theme.DEVICES.LAPTOP} {
		grid-area: backBtn;
	}

	svg {
		font-size: 32px;
	}
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

	@media ${({ theme }) => theme.DEVICES.LAPTOP} {
		width: 320px;
		height: 320px;
		grid-area: image;
	}

	@media ${({ theme }) => theme.DEVICES.LAPTOP_LG} {
		width: 400px;
		height: 400px;
		grid-area: image;
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

	@media ${({ theme }) => theme.DEVICES.LAPTOP} {
		text-align: left;
		grid-area: content;
		align-self: flex-end;

		> h1 {
			font-size: 4rem;
		}

		> p {
			font-size: 2.4rem;
		}
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
		text-align: center;
		line-height: 2.4rem;
		font-family: "Poppins", sans-serif;

		border-radius: 4px;
		background-color: ${({ theme }) => theme.COLORS.DARK_1000};
	}

	@media ${({ theme }) => theme.DEVICES.MOBILE_SM} {
		grid-template-columns: repeat(2, max-content);
	}

	@media ${({ theme }) => theme.DEVICES.TABLET} {
		display: flex;
		flex-wrap: wrap;
	}

	@media ${({ theme }) => theme.DEVICES.LAPTOP} {
		display: flex;
		flex-wrap: wrap;
	}

	@media ${({ theme }) => theme.DEVICES.LAPTOP_LG} {
		gap: 12px;
		justify-content: flex-start;
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

		svg {
			width: 22px;
		}
	}

	@media ${({ theme }) => theme.DEVICES.MOBILE_SM} {
		align-items: center;
		flex-direction: column;
	}

	@media ${({ theme }) => theme.DEVICES.TABLET} {
		justify-content: space-evenly;

		> button {
			width: fit-content;
		}
	}

	@media ${({ theme }) => theme.DEVICES.LAPTOP} {
		gap: 32px;
		margin-top: 0;
		grid-area: actions;
		align-self: flex-start;

		> button {
			width: fit-content;
		}
	}
`;
