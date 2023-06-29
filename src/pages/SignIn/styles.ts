import styled from "styled-components";

export const Container = styled.main`
	width: 100%;
	min-height: 100vh;
	padding: 158px 65px 0;

	display: flex;
	flex-direction: column;
	gap: 72px;
`;

export const Form = styled.form`
	width: 100%;
	height: fit-content;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 32px;

	> button {
		width: 100%;
	}

	> a {
		font-weight: 500;
		align-self: center;
		font-size: 1.4rem;
		font-family: "Poppins", sans-serif;
		color: ${({ theme }) => theme.COLORS.LIGHT_100};
	}
`;
