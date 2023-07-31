import styled from "styled-components";

export const Container = styled.section`
	width: 100%;
	padding: 24px;

	display: flex;
	flex-direction: column;
	gap: 24px;

	> h2 {
		font-weight: 500;
		font-size: 1.8rem;
		margin-bottom: 24px;
		font-family: "Poppins", sans-serif;
		color: ${({ theme }) => theme.COLORS.LIGHT_200};
	}

	div.slick-slider {
		:is(svg, svg:hover) {
			color: ${({ theme }) => theme.COLORS.LIGHT_200};
		}
	}

	@media ${({ theme }) => theme.DEVICES.MOBILE_LG} {
		div.slick-slide div {
			display: flex;
			justify-content: center;
		}
	}

	@media ${({ theme }) => theme.DEVICES.LAPTOP} {
		> h2 {
			font-size: 3.2rem;
		}
	}
`;

export const Item = styled.article`
	width: 210px;
	padding: 24px;
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 12px;

	cursor: pointer;
	border-radius: 8px;
	border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
	background-color: ${({ theme }) => theme.COLORS.DARK_200};

	> svg {
		top: 16px;
		right: 16px;
		z-index: 10;
		font-size: 24px;
		cursor: pointer;
		position: absolute;
	}

	> h3 {
		font-weight: 500;
		font-size: 1.4rem;
		line-height: 2.4rem;
		font-family: "Poppins", sans-serif;
		color: ${({ theme }) => theme.COLORS.LIGHT_300};
	}

	> span {
		display: none;
		font-weight: 400;
		font-size: 1.4rem;
		line-height: 2.4rem;
		font-family: "Roboto", sans-serif;
		color: ${({ theme }) => theme.COLORS.LIGHT_300};
	}

	> p {
		font-weight: 400;
		font-size: 1.6rem;
		font-family: "Roboto", sans-serif;
		color: ${({ theme }) => theme.COLORS.CAKE_200};
	}

	@media ${({ theme }) => theme.DEVICES.LAPTOP} {
		max-width: 300px;
		width: fit-content;
		gap: 16px;

		> h3 {
			font-weight: 700;
			font-size: 2.4rem;
			line-height: 3.4rem;
		}

		> span {
			display: block;
		}

		> p {
			font-size: 3.2rem;
			line-height: 5.2rem;
		}
	}
`;

export const Image = styled.picture`
	width: 88px;
	height: 88px;
	display: block;
	border-radius: 99%;

	> img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media ${({ theme }) => theme.DEVICES.LAPTOP} {
		width: 176px;
		height: 176px;
	}
`;

export const Actions = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;

	> div {
		width: fit-content;
		padding: 4px 0;
		z-index: 10;
		position: relative;

		display: flex;
		align-items: center;
		gap: 14px;

		svg {
			font-size: 24px;
			cursor: pointer;
		}

		p {
			font-weight: 400;
			font-size: 1.6rem;
			font-family: "Roboto", sans-serif;
			color: ${({ theme }) => theme.COLORS.LIGHT_300};
		}
	}

	> button {
		width: 100%;
		padding: 4px 24px;
	}

	@media ${({ theme }) => theme.DEVICES.LAPTOP} {
		flex-direction: row;

		> div {
			p {
				font-size: 2rem;
			}
		}

		> button {
			padding: 10px 24px;
		}
	}
`;
