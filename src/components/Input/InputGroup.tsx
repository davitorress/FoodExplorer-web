import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export function InputGroup({ children }: Props) {
	return <div>{children}</div>;
}
