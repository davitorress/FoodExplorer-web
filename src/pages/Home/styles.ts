import styled from "styled-components";

export const Container = styled.section`
	width: 100%;
	min-height: 100vh;
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
`;
