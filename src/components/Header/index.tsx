import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiSearch } from "react-icons/fi";
import { PiReceipt, PiSignOut } from "react-icons/pi";

import { Menu, Logo, Input, Button } from "@/components";
import { Container, Receipt, ReceiptButton } from "./styles";

import { useAuth } from "@/hooks/useAuth";

interface HeaderProps {
	searchValue?: string;
	searchOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Header({ searchValue, searchOnChange }: HeaderProps) {
	const navigate = useNavigate();
	const { signOut, user } = useAuth();
	const [showMenu, setShowMenu] = useState(false);

	function handleShowMenu() {
		setShowMenu(!showMenu);
	}

	return (
		<Container>
			{showMenu && <Menu searchValue={searchValue} searchOnChange={searchOnChange} onClose={handleShowMenu} />}
			<FiMenu onClick={handleShowMenu} />

			<Logo />

			<Input.Root>
				<Input.Group>
					<Input.Icon icon={FiSearch} />
					<Input.Field
						id="search"
						placeholder="Busque por pratos ou ingredientes"
						value={searchValue}
						onChange={searchOnChange}
					/>
				</Input.Group>
			</Input.Root>

			{!user.admin ? (
				<Receipt>
					<PiReceipt />
					<ReceiptButton>0</ReceiptButton>
				</Receipt>
			) : (
				<div></div>
			)}

			{user.admin ? (
				<Button type="button" text="Novo prato" onClick={() => navigate("/admin/create")} />
			) : (
				<Button type="button" text="Pedidos" icon={PiReceipt} />
			)}

			<PiSignOut onClick={() => signOut()} />
		</Container>
	);
}
