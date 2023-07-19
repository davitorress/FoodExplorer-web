import styled from "styled-components";

export const Container = styled.main`
	width: 100%;
	min-height: 100vh;
	padding: 158px 65px 65px;

	display: flex;
	flex-direction: column;
	gap: 72px;

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

	> :is(h1, a) {
		align-self: center;

		font-weight: 500;
		font-family: "Poppins", sans-serif;
		color: ${({ theme }) => theme.COLORS.LIGHT_100};
	}

	> h1 {
		display: none;

		font-size: 3.2rem;
		line-height: 4.4rem;
	}

	> button {
		width: 100%;
	}

	> a {
		font-size: 1.4rem;
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
