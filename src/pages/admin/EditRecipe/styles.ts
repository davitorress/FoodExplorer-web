import styled from "styled-components";

export const Container = styled.section`
	width: 100%;
	min-height: 100vh;

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
`;

export const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 24px;
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
`;
