import styled from "styled-components";

export const Container = styled.footer`
	width: 100%;
	padding: 24px 24px;

	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 8px;

	background-color: ${({ theme }) => theme.COLORS.DARK_600};

	> p {
		font-weight: 400;
		font-size: 1.2rem;
		font-family: "DM Sans", sans-serif;
		color: ${({ theme }) => theme.COLORS.LIGHT_200};
	}

	@media ${({ theme }) => theme.DEVICES.LAPTOP} {
		padding: 24px 124px;

		> p {
			font-size: 1.4rem;
		}
	}
`;

export const Logo = styled.picture`
	width: auto;
	height: 18px;
	display: block;

	> img {
		width: auto;
		height: 100%;
		object-fit: contain;
	}

	@media ${({ theme }) => theme.DEVICES.LAPTOP} {
		height: 30px;
	}
`;
