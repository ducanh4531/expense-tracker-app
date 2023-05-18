import categories from "../categories";

interface ExpenseFilterProps {
	onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: ExpenseFilterProps) => {
	return (
		<select
			onChange={(event) => onSelectCategory(event.target.value)}
			className="form-select mb-3"
		>
			{categories.map((category) => (
				<option value={category} key={category}>
					{category}
				</option>
			))}
		</select>
	);
};

export default ExpenseFilter;
