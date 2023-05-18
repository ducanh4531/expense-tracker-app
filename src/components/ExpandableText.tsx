import { useState } from "react";

interface ExpandableTextProps {
	maxChars?: number;
	children: string;
}

const ExpandableText = ({ children, maxChars = 100 }: ExpandableTextProps) => {
	const [isExpanded, setExpanded] = useState(false);

	const handleClick = () => {
		setExpanded(!isExpanded);
	};

	if (children.length <= maxChars) return <p>{children}</p>;

	const text = isExpanded ? children : children.substring(0, maxChars);
	return (
		<>
			<p>
				{text}...
				<button onClick={handleClick}>
					{isExpanded ? "Less" : "More"}
				</button>
			</p>
		</>
	);
};

export default ExpandableText;
