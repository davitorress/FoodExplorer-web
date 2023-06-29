import styled from "styled-components";

export const Container = styled.button`
	width: fit-content;
	padding: 12px 24px;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;

	font-weight: 500;
	font-size: 1.4rem;
	line-height: 2.4rem;
	font-family: "Poppins", sans-serif;

	border: none;
	border-radius: 5px;
	color: ${({ theme }) => theme.COLORS.LIGHT_100};
	background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

	&:hover {
		background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
	}

	&:disabled {
		cursor: not-allowed;
		background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
	}
`;
