import { ReactNode } from "react";

interface Props {
	children: ReactNode;
	onClick?: () => void;
}

export function InputGroup({ children, onClick }: Props) {
	return <div onClick={onClick}>{children}</div>;
}
