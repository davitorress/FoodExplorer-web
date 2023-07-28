import styled from "styled-components";

export const Container = styled.header`
	width: 100%;
	padding: 56px 28px 24px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	background-color: ${({ theme }) => theme.COLORS.DARK_700};

	> svg {
		cursor: pointer;
		font-size: 32px;
	}

	> picture {
		height: 32px;
	}

	> svg:last-of-type {
		font-size: 64px;
	}

	@media ${({ theme }) => theme.DEVICES.TABLET} {
		> :is(div:first-of-type, button, svg:last-of-type) {
			display: none;
		}
	}

	@media ${({ theme }) => theme.DEVICES.LAPTOP} {
		padding: 24px 64px;
		gap: 32px;

		> :is(svg:first-of-type, div:last-of-type) {
			display: none;
		}

		> picture {
			height: 56px;
			width: fit-content;
		}

		> button {
			width: 40%;
		}
	}
`;

export const Receipt = styled.div`
	cursor: pointer;
	position: relative;

	> svg {
		font-size: 32px;
	}
`;

export const ReceiptButton = styled.div`
	top: -5px;
	right: -5px;
	position: absolute;

	width: 20px;
	height: 20px;
	border: none;
	border-radius: 99%;

	display: flex;
	align-items: center;
	justify-content: center;

	font-weight: 500;
	font-size: 1.4rem;
	line-height: 2.4rem;
	font-family: "Poppins", sans-serif;
	color: ${({ theme }) => theme.COLORS.LIGHT_100};
	background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
`;
