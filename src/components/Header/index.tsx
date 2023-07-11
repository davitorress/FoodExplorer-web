import { FiMenu } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";

import { Logo } from "@/components";
import { Container, Receipt, ReceiptButton } from "./styles";

export function Header() {
	return (
		<Container>
			<FiMenu />

			<Logo />

			<Receipt>
				<PiReceipt />
				<ReceiptButton>0</ReceiptButton>
			</Receipt>
		</Container>
	);
}
