import { Items } from "./styles";

interface InputItemsProps {
	children: React.ReactNode;
}

export function InputItems({ children }: InputItemsProps) {
	return <Items>{children}</Items>;
}
