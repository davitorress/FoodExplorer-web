import ReactDOM from "react-dom/client";
import { ThemeProvider, StyleSheetManager } from "styled-components";

import theme from "./styles/theme";
import GlobalStyle from "./styles/global";
import { Routes } from "./routes";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<ThemeProvider theme={theme}>
		<StyleSheetManager shouldForwardProp={(prop) => prop !== "theme"}>
			<GlobalStyle />
			<AuthProvider>
				<ToastContainer />
				<Routes />
			</AuthProvider>
		</StyleSheetManager>
	</ThemeProvider>
);

