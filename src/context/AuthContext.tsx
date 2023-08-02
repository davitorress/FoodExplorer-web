import { createContext, useState, useEffect } from "react";
import { AxiosError } from "axios";
import { api } from "@/services/api";

interface SessionProps {
	name?: string;
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
	signUp: ({ name, email, password }: SessionProps) => void;
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
				if (error.response) {
					alert(error.response.data.message);
				} else {
					alert("Erro ao fazer login");
				}
			});
	}

	async function signUp({ name, email, password }: SessionProps) {
		api
			.post("/users", { name, email, password })
			.then((response) => {
				if (response.status === 201) {
					alert("Usuário criado com sucesso");
				}
			})
			.catch((error: AxiosError<{ status: string; message: string }>) => {
				if (error.response) {
					alert(error.response.data.message);
				} else {
					alert("Erro ao criar usuário");
				}
			});
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
				signUp,
				signOut,
				user: data.user,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
