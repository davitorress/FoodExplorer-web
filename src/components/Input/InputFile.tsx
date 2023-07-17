export function InputFile({ id, placeholder, ...rest }: React.InputHTMLAttributes<HTMLInputElement>) {
	return (
		<>
			<p>{placeholder}</p>
			<input id={id} type="file" hidden {...rest} />
		</>
	);
}
