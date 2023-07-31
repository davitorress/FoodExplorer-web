import styled from "styled-components";

export const Container = styled.main`
	width: 100%;
	min-height: 100vh;
	padding: 158px 65px 65px;

	display: flex;
	flex-direction: column;
	gap: 72px;

	> picture {
		width: 100%;
		height: 100%;
		display: block;

		> img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}

	@media ${({ theme }) => theme.DEVICES.MOBILE_SM} {
		padding: 158px 48px 65px;
	}

	@media ${({ theme }) => theme.DEVICES.LAPTOP} {
		padding: 90px 108px 112px;

		flex-direction: row;
		align-items: center;
		justify-content: space-around;

		> picture {
			height: 48px;
			max-width: 324px;
		}
	}
`;

export const Form = styled.form`
	width: 100%;
	height: fit-content;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 32px;

	> h1 {
		display: none;
		align-self: center;

		font-weight: 500;
		font-size: 3.2rem;
		line-height: 4.4rem;
		font-family: "Poppins", sans-serif;
		color: ${({ theme }) => theme.COLORS.LIGHT_100};
	}

	> button {
		width: 100%;
	}

	@media ${({ theme }) => theme.DEVICES.LAPTOP} {
		padding: 64px;
		max-width: 476px;
		background-color: ${({ theme }) => theme.COLORS.DARK_700};

		> h1 {
			display: block;
		}
	}
`;
