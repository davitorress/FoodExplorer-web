import styled from "styled-components";

export const Container = styled.section`
	width: 100%;
	min-height: 100vh;

	top: 0;
	left: 0;
	z-index: 20;
	position: fixed;

	display: grid;
	grid-template-rows: min-content auto min-content;

	> header {
		width: 100%;
		padding: 56px 28px 24px;

		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 16px;

		background-color: ${({ theme }) => theme.COLORS.DARK_700};

		svg {
			font-size: 32px;
		}

		h1 {
			font-weight: 400;
			font-size: 2.2rem;
			font-family: "Roboto", sans-serif;
		}
	}

	> main {
		width: 100%;
		height: auto;
		padding: 36px 28px 14px;

		display: flex;
		flex-direction: column;
		gap: 36px;

		background-color: ${({ theme }) => theme.COLORS.DARK_400};

		ul {
			list-style: none;

			li {
				width: 100%;
				padding: 10px;
				cursor: pointer;
				border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

				a {
					width: 100%;
					font-weight: 300;
					font-size: 2.4rem;
					display: inline-block;
					font-family: "Poppins", sans-serif;
					color: ${({ theme }) => theme.COLORS.LIGHT_300};
				}
			}
		}
	}
`;
