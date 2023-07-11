import { IconType } from "react-icons";

interface Props {
	icon: IconType;
}

export function InputIcon({ icon: Icon }: Props) {
	return <Icon />;
}
