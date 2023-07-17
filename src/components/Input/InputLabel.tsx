interface Props {
	id?: string;
	text: string;
}

export function InputLabel({ id, text }: Props) {
	return <label htmlFor={id}>{text}</label>;
}
