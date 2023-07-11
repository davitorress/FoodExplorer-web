export function InputField({ id, type, ...rest }: React.InputHTMLAttributes<HTMLInputElement>) {
	return <input id={id} type={type || "text"} {...rest} />;
}
