import styles from "./Button.module.css";

interface ButtonProps {
	color?: "Primary" | "Secondary" | "Success";
	children: string;
	onClick: () => void;
}

const Button = ({ color = "Primary", children, onClick }: ButtonProps) => {
	return (
		<button
			className={[styles.btn, styles[`btn${color}`]].join(" ")}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
