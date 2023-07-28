import { useState } from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import { PiReceipt, PiSignOut } from "react-icons/pi";

import { Menu, Logo, Input, Button } from "@/components";
import { Container, Receipt, ReceiptButton } from "./styles";

export function Header() {
	const [showMenu, setShowMenu] = useState(false);

	function handleShowMenu() {
		setShowMenu(!showMenu);
	}

	return (
		<Container>
			{showMenu && <Menu onClose={handleShowMenu} />}
			<FiMenu onClick={handleShowMenu} />

			<Logo />

			<Input.Root>
				<Input.Group>
					<Input.Icon icon={FiSearch} />
					<Input.Field id="search" placeholder="Busque por pratos ou ingredientes" />
				</Input.Group>
			</Input.Root>

			<Receipt>
				<PiReceipt />
				<ReceiptButton>0</ReceiptButton>
			</Receipt>

			<Button type="button" text={`Pedidos (0)`} icon={PiReceipt} />

			<PiSignOut />
		</Container>
	);
}
