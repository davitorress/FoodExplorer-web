import ReactDOM from "react-dom/client";
import { ThemeProvider, StyleSheetManager } from "styled-components";

import theme from "./styles/theme";
import GlobalStyle from "./styles/global";
import { SignUp } from "./pages/SignUp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<ThemeProvider theme={theme}>
		<StyleSheetManager shouldForwardProp={(prop) => prop !== "theme"}>
			<GlobalStyle />
			<SignUp />
		</StyleSheetManager>
	</ThemeProvider>
);

