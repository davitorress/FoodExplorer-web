import styled from "styled-components";

export const Container = styled.section`
	width: 100%;
	padding: 24px;

	display: flex;
	flex-direction: column;
	gap: 24px;
`;

export const Carousel = styled.div`
	width: 100%;
	overflow-x: visible;

	> h2 {
		font-weight: 500;
		font-size: 1.8rem;
		margin-bottom: 24px;
		font-family: "Poppins", sans-serif;
		color: ${({ theme }) => theme.COLORS.LIGHT_200};
	}
`;

export const List = styled.ul`
	width: 100%;
	overflow-x: scroll;

	display: flex;
	gap: 16px;
`;

export const Item = styled.li`
	width: 210px;
	padding: 24px;
	flex-shrink: 0;
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

	> p {
		font-weight: 400;
		font-size: 1.6rem;
		font-family: "Roboto", sans-serif;
		color: ${({ theme }) => theme.COLORS.CAKE_200};
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
`;
