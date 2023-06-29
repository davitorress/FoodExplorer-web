import { Container } from "./styles";

interface Props extends React.ComponentProps<React.FunctionComponent>, React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
}

export function Input({ id, label, type, ...rest }: Props) {
	return (
		<Container>
			<label htmlFor={id}>{label}</label>
			<input id={id} type={type || "text"} {...rest} />
		</Container>
	);
}
