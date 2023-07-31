import styled from "styled-components";

export const Container = styled.section`
	width: 100%;
	min-height: 100vh;

	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: auto 1fr auto;

	@media ${({ theme }) => theme.DEVICES.LAPTOP} {
		> main {
			padding: 48px 124px;
		}
	}
`;

export const Banner = styled.div`
	min-height: 120px;
	position: relative;
	margin: 44px 16px 62px 36px;
	padding: 36px 8px 22px 156px;

	display: flex;
	flex-direction: column;
	font-family: "Poppins", sans-serif;

	border-radius: 4px;
	background: ${({ theme }) => theme.COLORS.GRADIENT_200};

	> img {
		bottom: 0;
		left: -30px;
		width: 200px;
		position: absolute;
	}

	> h2 {
		font-weight: 600;
		font-size: 1.8rem;
		margin-bottom: 4px;
	}

	> p {
		font-weight: 400;
		font-size: 1.2rem;
	}

	@media ${({ theme }) => theme.DEVICES.LAPTOP} {
		margin: 0 16px 62px 36px;
		padding: 48px 8px 68px 400px;
		text-align: center;

		> img {
			width: 400px;
		}

		> h2 {
			font-size: 4rem;
			font-weight: 500;
		}

		> p {
			font-size: 1.6rem;
		}
	}

	@media ${({ theme }) => theme.DEVICES.LAPTOP_LG} {
		margin-top: 156px;

		> img {
			width: 600px;
		}
	}
`;
