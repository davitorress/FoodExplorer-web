import styled, { DefaultTheme } from "styled-components";

import ChevronDown from "@/assets/chevron-down.svg";

export const Container = styled.div`
	width: 100%;
	height: fit-content;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 8px;

	:is(input, label, select, textarea) {
		font-size: 1.6rem;
		font-family: "Roboto", sans-serif;
		color: ${({ theme }) => theme.COLORS.LIGHT_400};
	}

	:is(input, select, textarea) {
		width: 100%;
		padding: 12px 14px;

		border: none;
		border-radius: 8px;
		background-color: ${({ theme }) => theme.COLORS.DARK_900};

		&::placeholder {
			color: ${({ theme }) => theme.COLORS.LIGHT_500};
		}
	}

	select {
		padding: 16px;
		font-size: 1.4rem;

		appearance: none;
		background-repeat: no-repeat;
		background-position-y: center;
		background-image: url(${ChevronDown});
		background-position-x: calc(100% - 16px);
	}

	textarea {
		padding: 14px;
		resize: vertical;
		min-height: 172px;
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

		p {
			font-weight: 500;
			font-size: 1.4rem;
			line-height: 2.4rem;
			font-family: "Poppins", sans-serif;
		}
	}
`;

export const Items = styled.section`
	width: 100%;
	padding: 4px 8px;

	display: grid;
	align-items: center;
	grid-template-columns: 1fr 1fr;
	gap: 16px;

	border-radius: 8px;
	background-color: ${({ theme }) => theme.COLORS.DARK_900};
`;

export const Item = styled.section<{ theme: DefaultTheme; newer: string }>`
	display: flex;
	align-items: center;
	gap: 8px;
	padding: 10px 16px;

	border-radius: 8px;
	color: ${({ theme }) => theme.COLORS.LIGHT_100};
	border: ${({ theme, newer }) => (newer === "true" ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none")};
	background-color: ${({ theme, newer }) => (newer === "true" ? "transparent" : theme.COLORS.LIGHT_600)};

	> button {
		border: none;
		background: none;

		display: flex;
		align-items: center;

		svg {
			margin: 0;
			font-size: 16px;
		}
	}

	.button-delete {
		color: ${({ theme }) => theme.COLORS.LIGHT_100};
	}
	.button-add {
		color: ${({ theme }) => theme.COLORS.LIGHT_500};
	}

	> input {
		padding: 0;

		border: none;
		background: transparent;
		color: ${({ theme }) => theme.COLORS.LIGHT_100};

		&::placeholder {
			color: ${({ theme }) => theme.COLORS.LIGHT_500};
		}
	}
`;
