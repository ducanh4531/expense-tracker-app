import { ReactNode } from "react";

interface AlertProps {
	onClose: () => void;
	children: ReactNode;
}

const Alert = ({ onClose, children }: AlertProps) => {
	return (
		<>
			{/* <div className="alert alert-primary">{children}</div> */}
			<div
				className="alert alert-warning alert-dismissible fade show"
				role="alert"
			>
				{children}
				<button
					type="button"
					className="btn-close"
					data-bs-dismiss="alert"
					onClick={onClose}
					aria-label="Close"
				></button>
			</div>
		</>
	);
};

export default Alert;
