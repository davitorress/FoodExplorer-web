export function InputTextarea({ id, ...rest }: React.InputHTMLAttributes<HTMLTextAreaElement>) {
	return <textarea id={id} {...rest} />;
}
