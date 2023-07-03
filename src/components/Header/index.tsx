import { Logo } from "@/components";
import { Container, Receipt, ReceiptButton } from "./styles";

import menuIcon from "@/assets/menu-icon.svg";
import receiptIcon from "@/assets/receipt-icon.svg";

export function Header() {
	return (
		<Container>
			<img src={menuIcon} alt="Menu" />

			<Logo />

			<Receipt>
				<img src={receiptIcon} alt="Receipt" />
				<ReceiptButton>0</ReceiptButton>
			</Receipt>
		</Container>
	);
}
