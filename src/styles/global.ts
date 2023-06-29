import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: none;
		box-sizing: border-box;
	}

	:root {
		font-size: 62.5%;
	}

	body {
		-webkit-font-smoothing: antialiased;
		color: ${({ theme }) => theme.COLORS.LIGHT_300};
		background-color: ${({ theme }) => theme.COLORS.DARK_400};
	}

	a {
		text-decoration: none;
		transition: filter 0.2s;
	}
	a:hover {
		filter: brightness(0.9);
	}
	a, button {
		cursor: pointer;
	}
`;
