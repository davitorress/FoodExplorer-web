import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: fit-content;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 8px;

	:is(input, label) {
		font-size: 1.6rem;
		font-family: "Roboto", sans-serif;
		color: ${({ theme }) => theme.COLORS.LIGHT_400};
	}

	input {
		width: 100%;
		padding: 12px 14px;

		border: none;
		border-radius: 8px;
		background-color: ${({ theme }) => theme.COLORS.DARK_900};

		&::placeholder {
			color: ${({ theme }) => theme.COLORS.LIGHT_500};
		}
	}

	> div {
		width: 100%;
		display: flex;
		padding: 12px 14px;

		border-radius: 8px;
		background-color: ${({ theme }) => theme.COLORS.DARK_900};

		svg {
			font-size: 24px;
			margin-right: 14px;
			color: ${({ theme }) => theme.COLORS.LIGHT_400};
		}

		input {
			padding: 0;
			border-radius: 0;
			background-color: transparent;
		}
	}
`;
