import { FiPlus, FiX } from "react-icons/fi";

import { Item } from "./styles";

interface InputItemsProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLButtonElement> {
	value?: string;
	isNew?: boolean;
}

export function InputItem({ value, isNew = false, onClick, ...rest }: InputItemsProps) {
	return (
		<Item newer={isNew.toString()}>
			<input type="text" value={value} readOnly={!isNew} {...rest} />

			<button type="button" onClick={onClick} className={isNew ? "button-add" : "button-delete"}>
				{isNew ? <FiPlus /> : <FiX />}
			</button>
		</Item>
	);
}
