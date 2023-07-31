import { createContext, useState, useEffect } from "react";
import { AxiosError } from "axios";
import { api } from "@/services/api";

interface SessionProps {
	email: string;
	password: string;
	admin?: boolean;
}

interface UserProps {
	id: number;
	name: string;
	email: string;
	password: string;
	create_at: string;
	admin?: boolean;
}

interface DataProps {
	token: string;
	user: UserProps;
}

interface AuthContextProps {
	user: UserProps;
	signOut: () => void;
	signIn: ({ email, password, admin }: SessionProps) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [data, setData] = useState({} as DataProps);

	useEffect(() => {
		const user = localStorage.getItem("@FoodExplorer:user");
		const token = localStorage.getItem("@FoodExplorer:token");

		if (user && token) {
			setData({ token, user: JSON.parse(user) });
			api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
		}
	}, []);

	async function signIn({ email, password, admin = false }: SessionProps) {
		api
			.post("/sessions", { email, password, admin })
			.then((response) => {
				const { token, user } = response.data;

				localStorage.setItem("@FoodExplorer:token", token);
				localStorage.setItem("@FoodExplorer:user", JSON.stringify(user));

				setData({ token, user });
				api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			})
			.catch((error: AxiosError<{ status: string; message: string }>) => {
				console.log(error);
				if (error.response) {
					alert(error.response.data.message);
				} else {
					alert("Erro ao fazer login");
				}
			});
		// try {
		// 	const response = await api.post("/sessions", { email, password, admin });
		// 	const { token, user } = response.data;

		// 	localStorage.setItem("@FoodExplorer:token", token);
		// 	localStorage.setItem("@FoodExplorer:user", JSON.stringify(user));

		// 	setData({ token, user });
		// 	api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
		// } catch (error: any) {
		// 	console.log(error);
		// 	if (error.response) {
		// 		alert(error.response.data.message);
		// 	}
		// }
	}

	async function signOut() {
		localStorage.removeItem("@FoodExplorer:token");
		localStorage.removeItem("@FoodExplorer:user");
		setData({} as DataProps);
	}

	return (
		<AuthContext.Provider
			value={{
				signIn,
				signOut,
				user: data.user,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
