import { IconType } from "react-icons";

import { Container } from "./styles";

interface Props extends React.ComponentProps<React.FunctionComponent>, React.ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
	icon?: IconType;
}

export function Button({ text, icon: Icon, ...rest }: Props) {
	return (
		<Container {...rest}>
			{Icon && <Icon size={32} />}
			{text}
		</Container>
	);
}
