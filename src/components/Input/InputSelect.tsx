export function InputSelect({ id, children, ...rest }: React.InputHTMLAttributes<HTMLSelectElement>) {
	return (
		<select id={id} {...rest}>
			{children}
		</select>
	);
}
