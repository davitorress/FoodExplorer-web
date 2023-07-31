import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { FiX, FiSearch } from "react-icons/fi";

import { Footer, Input } from "@/components";
import { Container } from "./styles";

import { useAuth } from "@/hooks/useAuth";

interface Props {
	onClose: () => void;
}

export function Menu({ onClose }: Props) {
	const { user, signOut } = useAuth();

	return (
		<>
			{createPortal(
				<Container>
					<header>
						<FiX onClick={onClose} />
						<h1>Menu</h1>
					</header>

					<main>
						<Input.Root>
							<Input.Group>
								<Input.Icon icon={FiSearch} />
								<Input.Field id="search" placeholder="Busque por pratos ou ingredientes" />
							</Input.Group>
						</Input.Root>

						<ul>
							<li>
								<a onClick={() => signOut()}>Sair</a>
							</li>
							{user.admin && (
								<li>
									<Link to="/admin/create">Novo prato</Link>
								</li>
							)}
						</ul>
					</main>

					<Footer />
				</Container>,
				document.getElementById("overlay") as HTMLDivElement
			)}
		</>
	);
}
