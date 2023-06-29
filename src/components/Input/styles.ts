import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: fit-content;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 8px;

	font-size: 1.6rem;
	font-family: "Roboto", sans-serif;
	color: ${({ theme }) => theme.COLORS.LIGHT_400};

	> input {
		width: 100%;
		padding: 12px 14px;

		border: none;
		border-radius: 8px;
		color: ${({ theme }) => theme.COLORS.LIGHT_400};
		background-color: ${({ theme }) => theme.COLORS.DARK_900};
	}
	> input::placeholder {
		font-family: "Roboto", sans-serif;
		color: ${({ theme }) => theme.COLORS.LIGHT_500};
	}
`;
