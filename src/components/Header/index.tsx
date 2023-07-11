import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";

import { Menu, Logo } from "@/components";
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

			<Receipt>
				<PiReceipt />
				<ReceiptButton>0</ReceiptButton>
			</Receipt>
		</Container>
	);
}
