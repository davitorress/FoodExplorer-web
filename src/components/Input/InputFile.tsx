import { InputHTMLAttributes, forwardRef } from "react";

const InputFile = forwardRef(function InputFile(
	{ id, placeholder, ...rest }: React.DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
	ref: React.Ref<HTMLInputElement>
) {
	return (
		<>
			<p>{placeholder}</p>
			<input id={id} ref={ref} type="file" hidden {...rest} />
		</>
	);
});

export { InputFile };
