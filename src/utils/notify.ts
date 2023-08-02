import { toast } from "react-toastify";

type ToastType = "success" | "error" | "info" | "warning";

export const notify = (alertType: ToastType, alertMessage: string) => {
	toast[`${alertType}`](alertMessage, {
		position: "top-right",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "colored",
		style: {
			fontWeight: 600,
			fontSize: "1.4rem",
			fontFamily: "Poppins",
		},
	});
};
